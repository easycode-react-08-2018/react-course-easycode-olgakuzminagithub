import React, {Component} from 'react';

export class MainVideo extends Component {
    render() {
        const {state} = this.props;
        const src = 'https://www.youtube.com/embed/' + state.mainVideo.id.videoId;
        console.log(src);

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="random" src = {src}/>
                </div>
                <div className="details">
                    <div>TITLE</div>
                    <div>DESCRIPTION</div>
                </div>
            </div>
        )
    }

}