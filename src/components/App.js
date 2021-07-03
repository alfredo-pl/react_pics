import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';


export default class App extends React.Component {
    
    onSearchSubmit(term) {
        console.log(term);
    }
    
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}
