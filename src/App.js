import logo from './logo.svg';
import './App.css';
import dice from './icon-dice.svg';
import divider from './pattern-divider-desktop.svg';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [random, setRandom]= useState()


  const randomApi = () => {
    axios.get('https://api.adviceslip.com/advice').then(
      (response) =>{
        console.log(response.data.slip.advice)
        setRandom(response.data.slip.advice)
      }
    )
  }

// With Fetch instead of Axios

    //   fetch('https://api.adviceslip.com/advice').then(
    //     (response) => response.json().then((data)=> {
    //       setRandom(data.slip.advice)
    //     })
        
    //   )
    // }
 
    return (
      <div className="container-full d-flex justify-content-center align-items-center">

        <div className="container-rectangle flex-column d-flex justify-content-between align-items-center">

          <div className="advice">
            <p>ADVICE #177</p>
          </div>
      <div className="container-phrase d-flex flex-column align-items-center justify-content-center">
      <div className="phrase">
            <p> "{!random ? 'Everything in moderation, including moderation itself.' : random }" </p>
          </div>

      </div>
         

          <div className="line">
            <img src={divider} alt="" />
          </div>

          <div className="container-dice">
            <div onClick={randomApi} className="dice d-flex justify-content-center align-items-center">
              <img src={dice} alt="" />
            </div>
          </div>
        </div>

      </div>
    );
  }

export default App;
