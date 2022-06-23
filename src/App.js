import React from 'react';
import aluno from './img/aluno.png'
import docente from './img/professor.png'
import pais from './img/pais.png'
import style from './Card.module.css'
import Card from './Card'
import TelaCalendario from './TelaCalendario';
// 👇️ import Routes instead of Switch 👇️
import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import Principal from './Principal';
import PostarAtividade from './PostarAtividade';
import Matricula from './Matricula'
import AtividadesExtra from './AtividadesExtra'
export default function App() {
  return (
    <div className="app">


      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/telaCalendario" element={<TelaCalendario />} />
        <Route path="/postarAtividade" element={<PostarAtividade />} />
        <Route path="/matricula" element={<Matricula />} />
        <Route path="/extras" element={<AtividadesExtra />} />
      </Routes>
    </div>
  );
}


function Home() {
  const images = [{ type: 'Alunos', value: aluno }, { type: 'Docentes', value: docente }, { type: 'Pais', value: pais }]
  return (
    <div className={style.cards}>
      {images.map((image) => {
        return <Card cardType={image.type} imageCode={image.value} />
      })}
    </div>
  );
}