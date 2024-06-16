import './guide.css'
import React, { useState } from 'react';
import iphone from '../images/iphone.png'
import laptop from '../images/laptop.png'
import computer from '../images/computer.png'

const questions = [
    {
        id: 0,
        question: "Quelle est votre niveau en informatique ?",
        reponses: [
            { texte: "Débutant", questionSuivante: 1 },
            { texte: "Intermédiare", questionSuivante: 1 },
            { texte: "Expert", questionSuivante: 2 },
        ],
    },
    {
        id: 1,
      question: "Quel est votre type d/'utilisation ?",
      reponses: [
        { texte: "Chien", questionSuivante: 3 },
        { texte: "Chat", questionSuivante: 4 },
        // ... autres réponses possibles
      ],
    },
    {
      id: 2,
      question: "Quel est votre budget ?",
      reponses: [
        { texte: "Chien", questionSuivante: 3 },
        { texte: "Chat", questionSuivante: 4 },
        // ... autres réponses possibles
      ],
    },
    {
      id: 3,
      question: "Quel est votre type d/'utilisation ?",
      reponses: [
        { texte: "Chien", questionSuivante: 3 },
        { texte: "Chat", questionSuivante: 4 },
        // ... autres réponses possibles
      ],
    },
];

function Reponse({ texte, questionSuivante, handleResponse }) {
    return (
      <button onClick={() => handleResponse(questionSuivante)}>
        {texte}
      </button>
    );
}

function Guide () {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentReponse, setCurrentReponse] = useState(null);
  
    const handleResponse = (questionSuivante) => {
      setCurrentQuestion(questionSuivante);
      setCurrentReponse(null); // Réinitialise la réponse actuelle
    };

  return (
    <div className="container">
        <div className="guide">
            {/* <h1>Mon niveau de connaissance en informatique</h1> */}
            <div className="question">
                <h1>{questions[currentQuestion].question}</h1>
            </div>
            <div className="niveau">
                <img src={iphone} alt=""/>
                {/* <h2>Débutant</h2> */}
                {questions[currentQuestion].reponses.map((reponse, index) => (
            <Reponse
              key={index}
              texte={reponse.texte}
              questionSuivante={reponse.questionSuivante}
              handleResponse={handleResponse}
            />
        ))}
            </div>
            {/* <div className="niveau">
                <img src={laptop} alt=""/>
                <h2>Intermédiaire</h2>
            </div>
            <div className="niveau">
                <img src={computer} alt=""/>
                <h2>Expert</h2>
            </div> */}
        </div>
    </div>
    );
}

export default Guide;