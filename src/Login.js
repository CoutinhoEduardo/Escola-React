
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return <div>
            <main class="login">
                <div class="login__container">
                    <h1 class="login__title">Login</h1>
                    <form class="login__form">
                        <input id="login" class="login__input" type="text" placeholder="CPF" />
                        <span id="senha" class="login__input-border"></span>
                        <input class="login__input" type="password" placeholder="Senha" />
                        <span class="login__input-border"></span>
                        <button type="button" class="login__submit"><a href="/principal/alunos/"></a>Login</button>
                        <a class="login__reset" href="#">Esqueceu a senha?</a>
                    </form>
                </div>
            </main>

        </div>

    }

}

export default Login