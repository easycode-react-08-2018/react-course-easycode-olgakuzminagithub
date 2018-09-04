import React, { Component } from 'react';


import './App.css';

import {Search} from "./components/search";
import {MainVideo} from "./components/main-video";
import {ListVideo} from "./components/list-video";

import YTSearch from 'youtube-api-search';

class App extends Component {
    constructor () {
        super();

        this.state = {
            searchWord: 'matrix',
            mainVideo: { id: {videoId: "7GSgWzmR_-c"}},
            listVideo: []
        }
    }

    // const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;
    //
    // YTSearch({ key: API_KEY, term: this.searchWord}, data => {
    //     this.setState({
    //         mainVideo: data[0],
    //         listVideo: data
    //     });
    //
    // });
    render() {
        return (
            <main className="container">
                <Search state = {this.state}/>
                <div className="row">
                    <MainVideo state = {this.state}/>
                    <ListVideo state = {this.state}/>
                </div>
            </main>
        )
    }

}

export default App;
