import React, { Component, useState } from 'react';
import style from './Card.module.css'


class Card extends Component {


  alterar_url() {
    window.location = '/login?userType=aluno'
  }


  render() {

    return <div className={style.cards}>
      <main className="cards">
        <section className="card aluno">
          <div className="icon">
            <img width='300px' src={this.props.imageCode} alt={this.props.cardType} />
          </div>
          <h3>{this.props.cardType}</h3>
          <span>Clique aqui para acessar o portal dos {this.props.cardType}!</span>
          <button onClick={this.alterar_url} className="button">Portal dos {this.props.cardType}</button>
        </section>
      </main>
    </div>
  }
}



export default Card;
