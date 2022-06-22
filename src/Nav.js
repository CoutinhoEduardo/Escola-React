import React, { Component, useState } from 'react';



class Nav extends Component {


    alterar_url() {
        window.location = '/login?userType=aluno'
    }


    render() {

        return <div>
            <div class="sidebar">
                <center>
                    <img src="/images/pais.png" class="image" alt="" />
                    <h2>Pais</h2>
                </center>
                <a href=""><ion-icon name="home-outline"></ion-icon><span>Home</span></a>
                <a href=""><ion-icon name="desktop-outline"></ion-icon><span>Aulas</span></a>
                <a href=""><ion-icon name="calendar-clear-outline"></ion-icon><span>Agenda de Provas</span></a>
                <a href=""><ion-icon name="book-outline"></ion-icon><span>Atividades Extras</span></a>
                <a href=""><ion-icon name="shield-checkmark-outline"></ion-icon><span>Matrícula</span></a>
                <a href="#"><ion-icon name="chatbubble-outline"></ion-icon><span>Chats</span></a>
                <a href="#"><ion-icon name="settings-outline"></ion-icon><span>Configuração</span></a>

            </div>
        </div>
    }
}



export default Nav;
