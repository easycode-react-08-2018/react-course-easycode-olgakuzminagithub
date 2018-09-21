import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export class RecipeComponent extends Component {
    render() {
        const standartRecipePhoto = "https://www.shareicon.net/data/512x512/2016/08/18/812986_pie_512x512.png";
        const {
            recipe,
            allIngredients
        } = this.props;


        return (
            <div className="Receipt">
                <div className="Left-part">
                    <div className="Photo-receipt">
                        <img src={recipe.urlImg ? recipe.urlImg : standartRecipePhoto}></img>
                    </div>
                    <div className="Description-receipt">
                        <span>{recipe.name}</span>
                        {recipe.ingredients.map((ingredient, index) => {
                                return (
                                    <p>
                                        {index + 1} {allIngredients.map(elem => {
                                            if (ingredient === elem.id) {
                                                return elem.name
                                            }
                                        })}
                                    </p>
                                )
                            }
                        )}
                    </div>
                </div>
                <div className="Right-part">
                    <div className="All-ingredients">
                        <p>Всего ингридиентов <span>{recipe.ingredients.length}</span></p>
                    </div>
                    <div className="Control-receipt">
                        <Link to = {`/recipe-card/${recipe.id}`} exact>Редактировать</Link>
                        <button>Удалить</button>
                    </div>
                </div>
            </div>
        )
    }
}