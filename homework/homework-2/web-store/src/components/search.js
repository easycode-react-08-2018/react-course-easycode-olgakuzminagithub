import React, {Component} from 'react';

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

        this.setState({
            searchWord: word,
        });


        console.log(this.state.mainVideo.id.videoId);
    }

}