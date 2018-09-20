import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import './recipes.css';

import { userActions } from '../../store/action/login-actions/user.actions';
import {RecipeComponent} from "./components/recipe";

export class RecipesComponent extends Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const {
            user,
            recipes,
            ingredients
        } = this.props;

        return (
            <div className="Receipts">
                <div className="Search-panel">
                    <form>
                        <input placeholder="Фрагмент названия или ингридиента"></input>
                        <button>Найти</button>
                    </form>
                    <Link className='Add-recipe' to='/recipe-card'>Добавить рецепт</Link>
                </div>
                <div className="Receipts-list">
                    {recipes.map(recipe => {
                        return  <RecipeComponent recipe={recipe} ingredients={ingredients} />
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {  recipes, ingredients, authentication } = state;
    const { user } = authentication;
    return {
        user,
        recipes,
        ingredients,
    };
};

export const Recipes = connect(mapStateToProps)(RecipesComponent);