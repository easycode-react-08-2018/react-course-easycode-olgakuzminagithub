import React, {Component} from 'react';

export class Search extends Component {

    render() {
        const {searchByWord} = this.props;
        return (
            <div className="search-bar navbar">
                <input type="text" placeholder="Search" onInput={(e) => searchByWord(e)}/>
            </div>
        )
    }

}