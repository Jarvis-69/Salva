import React, { useState } from 'react';
import iphone from '../components/Assets/iphone.png';
import laptop from '../components/Assets/laptop.png';
import computer from '../components/Assets/computer.png';
// import desktopRecommendation from '../components/Assets/desktopRecommendation.png';
// import laptopRecommendation from '../components/Assets/laptopRecommendation.png';
// import Product from './Product';

const questions = [
    {
        id: 0,
        question: "Quelle est votre niveau en informatique ?",
        reponses: [
            { texte: "Débutant", questionSuivante: 1 },
            { texte: "Intermédiaire", questionSuivante: 1 },
            { texte: "Expert", questionSuivante: 2 },
        ],
    },
    {
        id: 1,
        question: "Quel est votre type d'utilisation ?",
        reponses: [
            { texte: "Navigation web et bureautique", questionSuivante: 3 },
            { texte: "Jeux et multimédia", questionSuivante: 3 },
            { texte: "Travail professionnel", questionSuivante: 4 },
        ],
    },
    {
        id: 2,
        question: "Quel est votre budget ?",
        reponses: [
            { texte: "Moins de 500€", questionSuivante: 3 },
            { texte: "500€ à 1000€", questionSuivante: 3 },
            { texte: "Plus de 1000€", questionSuivante: 4 },
        ],
    },
];

const products = {
    laptop: {
        name: "Ordinateur Portable",
        description: "Un ordinateur portable performant pour une utilisation quotidienne.",
        // image: laptopRecommendation,
        price: 799,
    },
    desktop: {
        name: "Ordinateur Fixe",
        description: "Un ordinateur fixe puissant pour les professionnels et les gamers.",
        // image: desktopRecommendation,
        price: 1200,
    },
};

function Reponse({ texte, questionSuivante, recommendation, handleResponse }) {
    return (
        <button onClick={() => handleResponse(questionSuivante, recommendation)}>
            {texte}
        </button>
    );
}

function Guide() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [recommendation, setRecommendation] = useState(null);

    const handleResponse = (questionSuivante, recommendation) => {
        if (recommendation) {
            setRecommendation(recommendation);
        } else {
            setCurrentQuestion(questionSuivante);
        }
    };

    return (
        <div className="container">
            <div className="guide">
                {!recommendation ? (
                    <>
                        <div className="question">
                            <h1>{questions[currentQuestion].question}</h1>
                        </div>
                        <div className="niveau">
                            <img src={currentQuestion < 2 ? iphone : (currentQuestion === 2 ? laptop : computer)} alt="" />
                            {questions[currentQuestion].reponses.map((reponse, index) => (
                                <Reponse
                                    key={index}
                                    texte={reponse.texte}
                                    questionSuivante={reponse.questionSuivante}
                                    recommendation={reponse.recommendation}
                                    handleResponse={handleResponse}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="recommendation">
                        {/* <Product
                            name={products[recommendation].name}
                            description={products[recommendation].description}
                            image={products[recommendation].image}
                            price={products[recommendation].price}
                        /> */}
                        <button onClick={() => {
                            setRecommendation(null);
                            setCurrentQuestion(0);
                        }}>Recommencer</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Guide;
