import logo from './logo.svg';
//import './App.css';
import { useReducer } from "react"
import './styles.css';

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
        
        <div class="reminders">
          <div className="first" contenteditable="false">REMINDERS:</div>
          </div>
          <div className="goals">
          <div className="firstG" contenteditable="false">GOALS:</div>
        </div>
        <div className="custom">
          <div className="firstC" contenteditable="true">CUSTOM:</div>
        </div>
          <div className="reminders-box">
            <div className="second" contenteditable="true">
              <li >Take out trash</li>
              <li >Take out trash</li>
              <li >Take out trash</li>
            </div>
          </div>
        <div className="goals-box">
            <div className="secondG" contenteditable="true">
              <li >Take out trash</li>
              <li >Take out trash</li>
              <li >Take out trash</li>
            </div>
          </div>
          <div className="custom-box">
            <div className="secondC" contenteditable="true">
              <li ></li>
              <li ></li>
              <li ></li>
            </div>
          </div>

         
      </header>
    </div>
  );
}

function listBoxes(){
  return(
    <div>yes</div>
    
  );
}

export default App;
