import React from 'react';

import { connect } from 'react-redux';

import { userActions } from '../../store/action/login-actions/user.actions';

import './sign-in.css';

class LoginPageComponent extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            user: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { user, password } = this.state;
        const { dispatch } = this.props;
        if (user && password) {
            dispatch(userActions.login(user, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { user, password, submitted } = this.state;
        return (
            <div className="Sign-in">
                <span>Well come to Flat earth</span>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="user" value={user} onChange={this.handleChange} />
                        {submitted && !user &&
                        <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button>Login</button>
                    </div>
                </form>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export const LoginPage = connect(mapStateToProps)(LoginPageComponent);
