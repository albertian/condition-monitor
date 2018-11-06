import React from 'react';
import Filter from './filter.jsx';
import Graph from '../containers/graph.jsx';

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