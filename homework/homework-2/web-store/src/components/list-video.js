import React, {Component} from 'react';

export class ListVideo extends Component {
    render() {
        const {
            state,
            changeMainVideoOnClicked
        } = this.props;

        return (
            <ul className="col-md-4 list-group">
                {state.listVideo.map((video, index) => {
                    if (index === 0) {
                        return
                    }
                    const src = 'https://www.youtube.com/embed/' + video.id.videoId;
                    const title = video.snippet.title;
                    return (
                        <li className="list-group-item" onClick={(e) => changeMainVideoOnClicked(index)}>
                            <div className="video-list media flex-wrap">
                                <div className="video-list media">
                                    <div className="media-left">
                                        <iframe title="random" src ={src}/>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div className="media-heading">{title}</div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

}