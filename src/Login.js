import React, { Component } from 'react';

class Login extends Component {
    render() {
        function alterar_url() {
            window.location = '/principal'
        }

        function logar() {

            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;

            if (login == "admin" && senha == "admin") {
                alert('Sucesso');
                alterar_url()
            } else {
                alert('Usuario ou senha incorretos');
            }

        }

        return <div>
            <main class="login">
                <div class="login__container">
                    <h1 class="login__title">Login</h1>
                    <form class="login__form">
                        <input id="login" class="login__input" type="text" placeholder="CPF" />
                        <span class="login__input-border"></span>
                        <input id="senha" class="login__input" type="password" placeholder="Senha" />
                        <span class="login__input-border"></span>
                        <button onClick={logar} type="button" class="login__submit">Login</button>
                        <a class="login__reset" href="#">Esqueceu a senha?</a>
                    </form>
                </div>
            </main>

        </div>

    }

}

export default Login