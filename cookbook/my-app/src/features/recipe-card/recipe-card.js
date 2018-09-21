import React, { Component } from 'react';
import {connect} from 'react-redux';
import './recipe-card.css';

export class RecipeCardComponent extends Component {
    render() {
        const standartRecipePhoto = "https://www.shareicon.net/data/512x512/2016/08/18/812986_pie_512x512.png";

        const id = this.props.match.params.id;

        const {
            recipes,
            allIngredients
        } = this.props;


        const recipeForEdit = recipes.map( recipe => {
            if (recipe.id === id) {
                return recipe
            }
        });

        console.log('нужный рецепт', recipeForEdit)


        return (
            <div className="Recipe-block">
                <div className="Left-part">
                    <div className="Photo-recipe">
                        <img src={standartRecipePhoto}></img>
                    </div>
                    <div className="Photo-control">
                        <button>Загрузить</button>
                        <button>Удалить</button>
                    </div>
                </div>
                <div className="Right-part">
                    <h1>Название</h1>
                    <div className="Name">
                        <p>Название</p>
                        <input placeholder="Название"></input>
                    </div>
                    <div className="List-ingredients">
                        <p>Список ингридиентов</p>
                        <table>
                            <tr><p>Ингридиент 1</p></tr>
                            <tr><p>Ингридиент 2</p></tr>
                            <tr><p>Ингридиент 3</p></tr>
                        </table>
                        <div className="Arrow">
                            <span> ⇨ </span>
                            <span> ⇦ </span>
                        </div>
                        <table>
                            <tr><p>Ингридиент 1</p></tr>
                            <tr><p>Ингридиент 2</p><span>5</span></tr>
                            <tr><p>Ингридиент 3</p></tr>
                        </table>
                    </div>

                </div>
                <div className="Button-box">
                    <button>Обновить</button>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    const {  recipes, allIngredients } = state;
    return {
        recipes,
        allIngredients,
    };
};

export const RecipeCard = connect(mapStateToProps)(RecipeCardComponent);