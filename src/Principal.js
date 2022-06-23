import React, { Component } from 'react';
import Headers from './Headers'
import Materia from './Materia';
import './Global.css'
import Marcas from './Marcas';
import Footer from './Footer'
class Principal extends Component {


    render() {



        return <div>
            <Headers />
            <div className='materia'>
                <Materia />
            </div>
            <div className='back'>
                <div className='sideBar'>
                    <div className='conteudo'>
                        <h3>Novidades</h3>
                        <Marcas />
                    </div>
                    <div className='conteudo'>
                        <h3>Avisos</h3>
                        <Marcas />
                    </div>
                    <div className='conteudo'>

                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>

    }





}

export default Principal