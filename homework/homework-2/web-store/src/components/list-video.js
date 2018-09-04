import React, {Component} from 'react';

export class ListVideo extends Component {
    render() {
        return (
            <ul className="col-md-4 list-group">
                <li className="list-group-item">
                    <div className="video-list media">
                        <div className="video-list media">
                            <div className="media-left">
                                <img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                            </div>
                        </div>
                        <div className="media-body">
                            <div className="media-heading">SOME VIDEO</div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="video-list media">
                        <div className="video-list media">
                            <div className="media-left">
                                <img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                            </div>
                        </div>
                        <div className="media-body">
                            <div className="media-heading">SOME VIDEO</div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="video-list media">
                        <div className="video-list media">
                            <div className="media-left">
                                <img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                            </div>
                        </div>
                        <div className="media-body">
                            <div className="media-heading">SOME VIDEO</div>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }

}