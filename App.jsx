import React, { useEffect, useState, useMemo } from "react";

import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {

  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");



  const data = [
    {
      id: 1,
      question: "Which city is known as the 'Pink City' in India?",
      answers: [
        {
          text: "Jaipur",
          correct: true,
        },
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "Kolkata",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which river is considered sacred in Hinduism and flows through the city of Varanasi?",
      answers: [
        {
          text: "Yamuna",
          correct: false,
        },
        {
          text: "Ganges",
          correct: true,
        },
        {
          text: "Brahmaputra",
          correct: false,
        },
        {
          text: "Godavari",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who is known as the 'Father of the Indian Constitution' ?",
      answers: [
        {
          text: "Mahatma Gandhi",
          correct: false,
        },
        {
          text: " Jawaharlal Nehru",
          correct: false,
        },
        {
          text: " B.R. Ambedkar",
          correct: true,
        },
        {
          text: "Sardar Vallabhbhai Patel",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which monument is considered one of the Seven Wonders of the World and is located in Agra, India?",
      answers: [
        {
          text: "Taj Mahal",
          correct: true,
        },
        {
          text: "Red Fort",
          correct: false,
        },
        {
          text: " Qutub Minar",
          correct: false,
        },
        {
          text: "Hawa Mahal",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which dance form originated in the southern state of Kerala and is known for its graceful movements?",
      answers: [
        {
          text: "Kathakali",
          correct: false,
        },
        {
          text: "Bharatanatyam",
          correct: true,
        },
        {
          text: "Odissi",
          correct: false,
        },
        {
          text: "Manipuri",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the current Prime Minister of India as of 2023?",
      answers: [
        {
          text: "Narendra Modi",
          correct: true,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
        {
          text: "Amit Shah",
          correct: false,
        },
        {
          text: "Arvind Kejriwal",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which is the largest national park in India?",
      answers: [
        {
          text: "Kanha National Park",
          correct: false,
        },
        {
          text: "Sundarbans National Park",
          correct: false,
        },
        {
          text: "Jim Corbett National Park",
          correct: false,
        },
        {
          text: "Kaziranga National Park",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which city is famous for its IT industry and is known as the 'Silicon Valley of India'?",
      answers: [
        {
          text: "Hyderabad",
          correct: false,
        },
        {
          text: "Bengaluru",
          correct: true,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Pune",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which famous annual festival of Odisha celebrates the return of Lord Jagannath to his temple in Puri?",
      answers: [
        {
          text: "Ratha Yatra",
          correct: true,
        },
        {
          text: "Diwali",
          correct: false,
        },
        {
          text: "Navratri",
          correct: false,
        },
        {
          text: "Makar Sankranti",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which is the largest state by area in India?",
      answers: [
        {
          text: "Uttar Pradesh",
          correct: true,
        },
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Rajasthan",
          correct: false,
        },
        {
          text: "Madhya Pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which city is home to the iconic Gateway of India monument?",
      answers: [
        {
          text: "Mumbai",
          correct: true,
        },
        {
          text: "Kolkata",
          correct: false,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Ahmedabad",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which is the national animal of India?",
      answers: [
        {
          text: "Lion",
          correct: false,
        },
        {
          text: "Tiger",
          correct: true,
        },
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Peacock",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which Indian scientist won the Nobel Prize in Physics in 1930 for his work on the scattering of light?",
      answers: [
        {
          text: "Satyendra Nath Bose",
          correct: false,
        },
        {
          text: "C. V. Raman",
          correct: true,
        },
        {
          text: "Homi J. Bhabha",
          correct: false,
        },
        {
          text: "Srinivasa Ramanujan",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which Indian state is known as the 'Land of the Gods' due to its numerous temples and religious sites?",
      answers: [
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: false,
        },
        {
          text: "Himachal Pradesh",
          correct: true,
        },
        {
          text: "Tamil Nadu",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which is the highest mountain peak in India?",
      answers: [
        {
          text: "Nanda Devi",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: false,
        },
        {
          text: "Kanchenjunga",
          correct: true,
        },
        {
          text: "Kangchenjunga",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Which festival is widely celebrated across India to mark the victory of light over darkness?",
      answers: [
        {
          text: "Diwali",
          correct: true,
        },
        {
          text: "Holi",
          correct: false,
        },
        {
          text: "Eid al-Fitr",
          correct: false,
        },
        {
          text: "Christmas",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
      {id:1, amount:"₹ 1,000"},
      {id:2, amount:"₹ 2,000"},
      {id:3, amount:"₹ 3,000"},
      {id:4, amount:"₹ 5,000"},
      {id:5, amount:"₹ 10,000"},
      {id:6, amount:"₹ 20,000"},
      {id:7, amount:"₹ 40,000"},
      {id:8, amount:"₹ 80,000"},
      {id:9, amount:"₹ 1,60,000"},
      {id:10, amount:"₹ 3,20,000"},
      {id:11, amount:"₹ 6,40,000"},
      {id:12, amount:"₹ 12,50,000"},
      {id:13, amount:"₹ 25,00,000"},
      {id:14, amount:"₹ 50,00,000"},
      {id:15, amount:"₹ 1 Crore"},
      {id:16, amount:"₹ 7 Crores"},
    ].reverse(),
    []
  );
  

  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id === questionNumber-1).amount)
  },[moneyPyramid,questionNumber])

  return (
    <div className="app">
      {username?(
        <>
        <div className="main">
        {stop ? (<h1 className="endText">You earned: {earned}</h1>):(
          <>
          <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
        </div>
        <div className="bottom">
          <Trivia 
           data={data} 
           setStop={setStop}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}/>
          </div>
          </>
          )};
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
      
        </ul>
      </div>
        </>
      ) :(<Start setUsername={setUsername}/>)}
      
    </div>
  );
}

export default App;
