import React, { Component } from 'react';


import './App.css';

import {Search} from "./components/search";
import {MainVideo} from "./components/main-video";
import {ListVideo} from "./components/list-video";

class App extends Component {
    constructor () {
        super();

        this.state = {
            searchWord: 'matrix',
            mainVideo: { id: {videoId: "7GSgWzmR_-c"}},
            listVideo: []
        }
    }
    render() {
        return (
            <main className="container">
                {<Search state = {this.state}/>}
                <div className="row">
                    {<MainVideo state = {this.state}/>}
                    {<ListVideo state = {this.state}/>}
                </div>
            </main>
        )
    }

}

export default App;
