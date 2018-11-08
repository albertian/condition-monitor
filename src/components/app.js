import React from 'react';
import Filter from './filter';
import Graph from '../containers/graph';
import style from './style.css';

class App extends React.PureComponent {
    render() {
        return [
            <header key="header">
                <Filter />
            </header>,
            <main key="main">
                <Graph />
            </main>
        ];
    }
}
 
export default App;
