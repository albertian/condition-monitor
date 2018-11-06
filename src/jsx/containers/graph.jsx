import React from 'react';
import GraphicItem from '../components/graphic-item.jsx';
import { fetchConditions } from '../actions/action-creator';
import '../../css/graph.css';

import { connect } from 'react-redux';
import { LABELS_WIDTH_PX } from '../constants/index.js';

class Graph extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.state = {
            posX: null,
            relativeWidth: null
        };
    }
    componentDidMount() {
        this.props.fetchConditions();
        this.straightLine = this.setupTimeLineStrip();
    }
    
    /**
     * Install the cursor attached vertical line
     * @returns {HTMLElement}
     */
    setupTimeLineStrip() {
        const straightLine = document.createElement('div');
        straightLine.classList.add('straightLine');
        straightLine.style.height = "100%";
        straightLine.style.width = '2px';
        this.refs.current.insertBefore(straightLine, this.refs.current.firstElementChild);
        return straightLine;
    }

    /**
     * Calculates relative length of each state period
     * @param {Array.<Object>} states - list of objects with appear time and status
     * @returns {Object}
     */
    getGraphParts(states) {
        const { begin_ts, end_ts } = this.props,
            duration = end_ts - begin_ts,
            parts = [];
        let lastPeriod = end_ts,
            issue = false,
            j = states.length;
        while (j--) {
            //addition validation
            if (states[j].appear_ts < lastPeriod) {
                parts.push({
                    width: (lastPeriod - states[j].appear_ts) / duration,
                    status: states[j].level,
                    description: states[j].descriptions
                });
                lastPeriod = states[j].appear_ts;
                if (states[j].level === 'Fail') {
                    issue = true;
                }
            };
        }
        if (lastPeriod > begin_ts) {
            parts.push({
                width: (lastPeriod - begin_ts) / duration,
                status: 'No data',
                description: ''
            });
        }
        parts.reverse();
        return { parts, issue };
    }
    /**
     * Get description to status according to selected time
     * @param {Array.<Object>} parts which contain relative width, status and description 
     */
    getDescription(parts) {
        let sum = 0;
        for (let part of parts) {
            sum += part.width;
            if (sum > this.state.relativeWidth) {
                return part.description || part.status;
            }
            continue;
        }
    }
    onMouseMove(event) {
        var transform = 'translate(' + event.pageX + 'px, 0px)';
        this.straightLine.style.transform = transform;
    }
    onClick(event) {
        if (!this.currentTimeStrip) {
            this.currentTimeStrip = this.setupTimeLineStrip();
        }
        var transform = 'translate(' + event.pageX + 'px, 0px)';
        this.currentTimeStrip.style.transform = transform;

        const relativeWidth = (event.pageX - LABELS_WIDTH_PX) / (this.refs.current.clientWidth - LABELS_WIDTH_PX);
        this.setState({posX: event.pageX, relativeWidth});
    }
    render() {
        const issues = [],
            others = [];
        if (this.props.components) {
            this.props.components.forEach((component, index) => {
                const isVisible = !this.props.subSystemVisibility.includes(component.subsystem_id);
                if (!isVisible) {
                    return;
                }
                const graphParts = this.getGraphParts(component.states),
                    item = <GraphicItem key={index} parts={graphParts.parts} label={component.title} posX={this.state.posX} description={this.getDescription(graphParts.parts)}/>;
                if (graphParts.issue) {
                    issues.push(item);
                } else {
                    others.push(item);
                }
            });
        }
        return <div className="graphic" ref="current" onMouseMove={this.onMouseMove} onClick={this.onClick}>
            <div className="graphic__stripes" ></div>
            <div className="graphic__label">Issues</div>
            {issues}
            <div className="graphic__label">Others</div>
            {others}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        subSystemVisibility: state.subSystemVisibility,
        components: state.componentsConditions.components,
        begin_ts: state.componentsConditions.begin_ts,
        end_ts: state.componentsConditions.end_ts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchConditions: () => {
            dispatch(fetchConditions())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Graph);