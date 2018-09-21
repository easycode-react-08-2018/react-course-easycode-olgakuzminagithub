import React, {Component} from 'react';

export class MainVideo extends Component {
    render() {
        const {state} = this.props;
        const src = 'https://www.youtube.com/embed/' + state.mainVideo.id.videoId;
        const title = state.mainVideo.snippet.title;
        const description = state.mainVideo.snippet.description;
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="random" src = {src}/>
                </div>
                <div className="details">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        )
    }

}