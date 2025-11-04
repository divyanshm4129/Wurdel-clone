import React from 'react';
import Wurdle from './Wurdle';
import image from '../assets/logoo.png';


export default function Game({solution}) {
  return (
    <div className="game-page">
        
        {solution && <Wurdle solution={solution} />}
    </div>
  )
}
