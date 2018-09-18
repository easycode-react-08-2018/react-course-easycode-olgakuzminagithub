import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import {Header} from "./features/site-header/site-header";
import {RecipeCard} from "./features/recipe-card/recipe-card";
import {SignIn} from "./features/sign-in/sign-in";
import {Recipes} from "./features/recipes/recipes";

export class App extends Component {
  render() {
    return (
      <div className="Container">
          <Header/>
          <main>
              <Switch>
                  <Route exact path='/' component={SignIn}/>
                  <Route path='/recipes' component={Recipes}/>
                  <Route path='/recipe-card' component={RecipeCard}/>
              </Switch>
          </main>
      </div>
    )
  }
}
