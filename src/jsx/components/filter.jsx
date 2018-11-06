import React from 'react';
import FilterButtons from '../containers/filter-buttons.jsx';
import '../../css/filter.css';

class Filter extends React.PureComponent {
    render() {
        return <div className="filter">
            <div className="vecicle">Vecicle</div>
            <div className="signals-schemas-toggler">
                <div className="signals-schemas-toggler__button">signals</div>
                <div className="signals-schemas-toggler__button">schemas</div>
            </div>
            <div className="button-group">
                <span className="devices-functions-toggler">
                    <div className="devices-functions-toggler__white-button">DEVICES</div>
                    <div className="devices-functions-toggler__brown-button">FUNCTIONS</div>
                </span>
                <FilterButtons />
            </div>
        </div>
    }
}
export default Filter;