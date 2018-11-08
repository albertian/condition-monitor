import React from 'react';
import { fetchVisibilityFilters, switchVisibilityFilter } from '../../actions/action-creator';
import { connect } from 'react-redux';
import { SUBSYSTEMS } from '../../constants';
import './style.css';

class FilterButtons extends React.Component {
    componentDidMount() {
        this.props.fetchVisibilityFilters();
    }
    render() {
        var listItems = SUBSYSTEMS.map((item, i) => {
            const isSelected = !this.props.subSystemVisibility.includes(item.id);
            return (
                <div
                    data-id={i}
                    key={i}
                    draggable='true'
                    className={'filters__button ' + (!isSelected ? 'background-grey' : '')}
                    onClick={this.props.switchVisibilityFilter.bind(this, item.id)}>
                    {item.name}
                </div>
            );
        });
        return <div className="filters">
            {listItems}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        subSystemVisibility: state.subSystemVisibility
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVisibilityFilters: () => {
            dispatch(fetchVisibilityFilters());
        },
        switchVisibilityFilter: id => {
            dispatch(switchVisibilityFilter(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);