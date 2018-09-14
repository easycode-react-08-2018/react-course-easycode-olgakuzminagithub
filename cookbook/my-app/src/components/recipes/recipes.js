import React, { Component } from 'react';
import './recipes.css';

export class Recipes extends Component {
    render() {
        const standartRecipePhoto = "https://www.shareicon.net/data/512x512/2016/08/18/812986_pie_512x512.png";
        return (
            <div className="Receipts">
                <div className="Search-panel">
                    <form>
                        <input placeholder="Фрагмент названия или ингридиента"></input>
                        <button>Найти</button>
                    </form>
                    <button>Добавить рецепт</button>
                </div>
                <div className="Receipts-list">
                    <div className="Receipt">
                        <div className="Left-part">
                            <div className="Photo-receipt">
                                <img src={standartRecipePhoto}></img>
                            </div>
                            <div className="Description-receipt">
                                <span>Название</span>
                                <p>1 Ингридиент</p>
                                <p>2 Ингридиент</p>
                                <p>3 Ингридиент</p>
                            </div>
                        </div>
                        <div className="Right-part">
                            <div className="All-ingredients">
                                <p>Всего ингридиентов <span>5</span></p>
                            </div>
                            <div className="Control-receipt">
                                <button>Редактировать</button>
                                <button>Удалить</button>
                            </div>
                        </div>
                    </div>
                    <div className="Receipt">
                        <div className="Left-part">
                            <div className="Photo-receipt">
                                <img src={standartRecipePhoto}></img>
                            </div>
                            <div className="Description-receipt">
                                <span>Название</span>
                                <p>1 Ингридиент</p>
                                <p>2 Ингридиент</p>
                                <p>3 Ингридиент</p>
                            </div>
                        </div>
                        <div className="Right-part">
                            <div className="All-ingredients">
                                <p>Всего ингридиентов <span>5</span></p>
                            </div>
                            <div className="Control-receipt">
                                <button>Редактировать</button>
                                <button>Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}