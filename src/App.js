import React from 'react';
import aluno from './img/aluno.png'
import docente from './img/professor.png'
import pais from './img/pais.png'
import style from './Card.module.css'
import Card from './Card'
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './Login'
import Principal from './Principal';
export default function App() {
  return (
    <div className="app">


      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
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