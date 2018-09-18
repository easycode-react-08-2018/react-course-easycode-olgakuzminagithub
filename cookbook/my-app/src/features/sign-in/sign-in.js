import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sign-in.css';

const url = 'https://flatearth-api.herokuapp.com/api/v1/auth';

export class SignIn extends Component {
    state = {
        user: '',
        password: ''
    };

    updateInput = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    login = (e) => {
        e.preventDefault();
        fetch(url + "/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(answer => {
            return answer.json()
        }).then(data => {
            const token = data.message.token;

            console.log(data);

            fetch(url + "/secret", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(users => {
                    return users.json()
                }).then(data => console.log(data))
        })

    };



    render() {
        const {
            user,
            password
        } = this.state;

        return (
            <div className="Sign-in">
                <span>Well come to Flat earth</span>
                <form>
                    <div>
                        <label>UserName</label>
                        <input
                            placeholder="Enter User Name"
                            type="text"
                            onChange={this.updateInput}
                            value={user}
                            name="user"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            placeholder="Password"
                            type="text"
                            onChange={this.updateInput}
                            value={password}
                            name="password"
                        />
                    </div>
                    <div className="Signin-box">
                        <Link className ='Signin-button' to='/recipes'>Sign In</Link>
                        <input type="checkbox"></input>
                        <p>Remember me</p>
                    </div>
                </form>
            </div>
        )
    }
}