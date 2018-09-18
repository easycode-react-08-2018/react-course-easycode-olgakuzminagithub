import React, { Component } from 'react';
import './recipe-card.css';

export class RecipeCard extends Component {
    render() {
        const standartRecipePhoto = "https://www.shareicon.net/data/512x512/2016/08/18/812986_pie_512x512.png";
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