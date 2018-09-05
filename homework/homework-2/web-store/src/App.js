import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import './App.css';

import {Search} from "./components/search";
import {MainVideo} from "./components/main-video";
import {ListVideo} from "./components/list-video";


class App extends Component {
    constructor () {
        super();

        this.API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

    }

    searchByWord = (e) => {
        const word = e.target.value;

        YTSearch({ key: this.API_KEY, term: word}, data => {
            this.setState({
                searchWord: word,
                mainVideo: data[0],
                listVideo: data
            });
        });
    };

    changeMainVideoOnClicked = (mainIndex) => {
        const newMainVideo = this.state.listVideo[mainIndex];
        const newListVideo = [];
        newListVideo.push(newMainVideo);

        this.state.listVideo.forEach((video, index) => {
            if (index !== mainIndex){
                newListVideo.push(video)
            }
        });

        this.setState({
            mainVideo: newMainVideo,
            listVideo: newListVideo,
        });

    };

    render() {
        if (!this.state) {
            YTSearch({ key: this.API_KEY, term: 'matrix'}, data => {
                this.setState({
                    searchWord: 'matrix',
                    mainVideo: data[0],
                    listVideo: data
                });
            });
            return <div>Loading....</div>
        }
        return (
            <main className="container">
                <Search searchByWord = {this.searchByWord} />
                <div className="row">
                    <MainVideo state = {this.state}/>
                    <ListVideo
                        state = {this.state}
                        changeMainVideoOnClicked = {this.changeMainVideoOnClicked}
                    />
                </div>
            </main>
        )
    }

}

export default App;
