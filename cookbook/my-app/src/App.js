import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/site-header/site-header";
import {Recipe} from "./components/one-recipe/recipe";
import {SignIn} from "./components/sign-in/sign-in";
import {Recipes} from "./components/recipes/recipes";

export class App extends Component {
  render() {
    return (
      <div className="Container">
          <Header/>
          <SignIn/>
      </div>
    )
  }
}

