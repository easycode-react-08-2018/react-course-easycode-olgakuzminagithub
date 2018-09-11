import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const standartLogo = "http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/user2-add-icon.png";
    const standartRecipePhoto = "https://www.shareicon.net/data/512x512/2016/08/18/812986_pie_512x512.png";
    return (
      <div className="Container">
          <div className="Site-header">
              <div className="User-login">User login</div>
              <div className="Right-part">
                  <div className="Sing-out">Sign out</div>
                  <div className="Logo">
                      <img  src={standartLogo}></img>
                      <p>Logo</p>
                  </div>
              </div>
          </div>
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
          </div>
          <div className="Sign-in">
              <span>Well come to Flat earth</span>
              <form>
                  <div>
                      <label>UserName</label>
                      <input placeholder="Enter User Name"></input>
                  </div>
                  <div>
                      <label>Password</label>
                      <input placeholder="Password"></input>
                  </div>
                  <div className="Signin-button">
                      <button>Sign In</button>
                      <input type="checkbox"></input>
                      <p>Remember me</p>
                  </div>
              </form>

          </div>
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

      </div>
    )
  }
}

export default App;
