import React from 'react';
import './style.css';

class GraphicItem extends React.Component {
    constructor(props) {
        super(props);
        this.allowDrop = this.allowDrop.bind(this);
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    drag(e) {
        e.dataTransfer.setData("id", this.props.id);
        e.dataTransfer.setData("type", this.props.type);
    }
    drop(e) {
        //little validation to prevent moving to different group
        const movedItemType = e.dataTransfer.getData("type");
        if (this.props.type !== movedItemType) {
            return;
        }
        e.preventDefault();
        const id1 = +e.dataTransfer.getData("id");
        this.props.setPosition(id1, this.props.id);
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

        return <div className="item" draggable='true' onDragStart={this.drag} onDragOver={this.allowDrop} onDrop={this.drop}>
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
