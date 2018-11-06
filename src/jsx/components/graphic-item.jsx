import React from 'react';


class GraphicItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const listItems = this.props.parts.map((value, index) => {
            let className = 'item__graph-part ';
            if (value.status === 'Ok') {
                className += 'green-line';
            } else if (value.status === 'Fail'){
                className += 'red-line';
            }
            return <div
                key={index}
                className={className}
                style={{ width: value.width * 100 + '%' }}>
            </div>
        }
        );

        return <div className="item">
            <div className="label">
                <span className="label__more"></span>
                <span className="label__text">{this.props.label}</span>
            </div>
            <div className="description" style={{marginLeft: this.props.posX}}>{this.props.description}</div>
            <div className="item__graph">
                {listItems}
            </div>
        </div>
    }
}
export default GraphicItem;