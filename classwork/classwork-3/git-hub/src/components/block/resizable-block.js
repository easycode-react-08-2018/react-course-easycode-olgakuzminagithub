import React, { Component } from 'react';

const blockStyle = {
    height: '300px',
    width: '300px',
    backgroundColor: 'yellow'
};

const resizeStyle = {
    height: '150px',
    width: '150px',
    backgroundColor: 'yellow'
};

export class ResizableBlock extends Component {
    constructor() {
        super();
        this.state = {
            style: blockStyle
        }
    }

    componentDidMount() {
        window.addEventListener('resize', (event) => {
            if ( window.innerHeight < 600 && window.innerWidth < 800) {
                this.setState ({
                    style: resizeStyle
                });
                return;
            }
            this.setState ({
                style: blockStyle
            })
        })
    }

    componentWillUnmount () {

    }
    render() {
         return (
             <div style={this.state.style}>

             </div>
         )
    }
}