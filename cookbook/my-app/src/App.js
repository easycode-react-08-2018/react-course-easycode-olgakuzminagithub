import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { history } from './helpers/history';


import { Header } from "./features/site-header/site-header";
import { LoginPage } from './features/login/LoginPage';
import { Recipes } from "./features/recipes/recipes";
import { RecipeCard } from "./features/recipe-card/recipe-card";


import { alertActions } from './store/action/login-actions/alert.actions';
import { PrivateRoute } from './components/PrivateRouter';

export class AppComponents extends Component {

  constructor(props) {
    super(props);
    const { dispatch } = this.props;
      history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
      });
   }

  render() {
    const { alert } = this.props;

    return (
      <div className="Container">
          {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
              <div>
                  <Header/>
                  <PrivateRoute exact path="/" component={Recipes} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/recipe-card/:id" component={RecipeCard} exact/>
              </div>
          </Router>
      </div>
    )
  }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export const App = connect(mapStateToProps)(AppComponents);

