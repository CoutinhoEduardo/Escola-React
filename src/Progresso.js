import React from 'react';
import { Progress } from 'reactstrap';
import './Global.css'

const Progresso = (props) => {
  return (
    <div className='progresso'>
      <h3>Progresso na matéria</h3>
      <div className="text-center">Portugues 0%</div>
      <Progress />
      <div className="text-center">Matematica 25%</div>
      <Progress value="25" />
      <div className="text-center">Canto 50%</div>
      <Progress value={50} />
      <div className="text-center">Futsal 75%</div>
      <Progress value={75} />
    </div>
  );
};

export default Progresso;