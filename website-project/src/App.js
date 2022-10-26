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

        <div class="box">
          <div className="first" contenteditable="false">REMINDERS:</div>
           <div className="box2">
            <div className="second" contenteditable="true">
              <li >Take out trash</li>
              <li >Take out trash</li>
              <li >Take out trash</li>
            </div>
          </div>
          </div>
          

        <div id="text-box" contenteditable="false">
          <style scoped>


          </style>
          <p>REMINDERS:</p>
        </div>

        <ul>
          <div id="first-section" contenteditable="true">
            <li id="save">
            Wash clothes
            </li>
          </div>

          <li id="second-section" contenteditable="true">Take out trash</li>
          <li id="third-section" contenteditable="true">Wash the dishes</li>
          <li id="fourth-section" contenteditable="true">Buy groceries</li>
        </ul>

      </header>
    </div>
  );
}

export default App;
