import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

export class Search extends Component {
    constructor (props) {
        super();
        this.state = props.state;
    }

    render() {
        return (
            <div className="search-bar navbar">
                <input type="text" placeholder="Search" onInput={(e) => this.searchByWord(e)}/>
            </div>
        )
    }
    searchByWord = (e) => {
        const word = e.target.value;

        const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

        YTSearch({ key: API_KEY, term: word}, data => {
            this.setState({
                searchWord: word,
                mainVideo: data[0],
                listVideo: data
            });

        });

        console.log(this.state.mainVideo.id.videoId);
    }

}