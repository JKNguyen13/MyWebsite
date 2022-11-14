import logo from './logo.svg';
//import './App.css';
import { useReducer } from "react"
import './styles.css';
import Clock from "./components/Clock"


const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
    return state
  }
}

const yes = ["'Don't look back.'", "'You are not a mistake.'", "'You are amazing.'", "'All our dreams can come true, if we have the courage to pursue them.'"]
const randNum = Math.floor(Math.random() * 4)

function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer,{})

  return (


    
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">{previousOperand} {operation} </div>
            <div className="current-operand">{currentOperand}</div>
          </div>
          <button className="span-two>">AC</button>
          <button>DEL</button>
          <button>/</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button className="span-two">=</button>

        </div>
        
        <div className = "quotesBox">
        <div className = "quotes">{yes[randNum]}</div>
        </div>

        <div class="reminders">REMINDERS:</div>
        <div className="goals">GOALS:</div>
        <div className="custom" contenteditable="true">CUSTOM:</div>
          
        <textarea className="reminders-box"></textarea> 
        <textarea className="goals-box"></textarea>
        <textarea className="custom-box"></textarea>
          
       <Clock></Clock>

        <div className="weather">
          <img src="https://cdn-icons-png.flaticon.com/512/1555/1555512.png" className="weatherIcon"></img>
          <div className="text">
              Sunday
        
          </div>
        </div>
        <div className="weatherClick">
          <img src="https://www.transparentpng.com/thumb/arrow/right-black-arrow-icon-png-29.png"className="text"></img>
        </div>
        
      </header>
    </div>
  );
}

export default App;
