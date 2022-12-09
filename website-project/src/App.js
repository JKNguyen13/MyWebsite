import logo from './logo.svg';
//import './App.css';
import { useReducer } from "react"
import './styles.css';
import Clock from "./components/Clock"
import Doodle from './components/Doodle';
import DailyRec from "./components/DailyRec";
import Calculator from './components/Calculator';
        

const ownerName = ["Justin"]
const greetings = ["Welcome, ","Hey, ", "What's up, ", "What's good, "]
const greetingsFollowUp = ["What's in store for us today?", "What's waiting for us today?", "What will we do today?", "What do we need to do today?"]
const yes = ["'Don't look back.'", "'You are not a mistake.'", "'You are amazing.'", "'Follow your dreams'"]
const randNum = Math.floor(Math.random() * 4)
const texts = ["hi"]
const specialDay = ["National Donut Day", "Valentine's Day", "National Bestfriend Day", "Christmas"]
const dayDetails = ["Celebrated in the United States and in some other countries, National Donut Day is on the first Friday of June of each year, succeeding the doughnut event created by The Salvation Army in Chicago in 1938 to honor those of their members who served doughnuts to soldiers during World War I.", "It originated as a Christian feast day honoring one or two early Christian martyrs named Saint Valentine and, through later folk traditions, has become a significant cultural, religious, and commercial celebration of romance and love in many regions of the world.", "As most national days start, the US Congress declared there be a National Best Friends Day all the way back in 1935. It was chosen as June 8 since it's a relatively nice weather day everywhere in the country.", "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world."]
const permNumb = 1;

function App() {

  

  return (


    
    <div className="App" id="temp">
      
      <header className="App-header" id="temp2">
        <div className="NavBar">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        <permNumb></permNumb>

        <div className = "welcomeText">{greetings[randNum]}{ownerName}!</div>
        <div className="followUpText">{greetingsFollowUp[randNum]}</div>

        <div class="reminders">REMINDERS:</div>
        <div className="goals">GOALS:</div>
        <div className="custom" contenteditable="true">CUSTOM:</div>

        <div className="reminders-box">
          <input type="checkbox" className="testC"></input>
          <label for="testC">
            <textarea className = "hi">hi</textarea>
          </label>
        </div> 
        
        <textarea className="goals-box"></textarea>
        <textarea className="custom-box"></textarea>
        
        <DailyRec id="DailyRec"></DailyRec>
        

        <Doodle></Doodle>

        <Calculator></Calculator>
        
        <Clock></Clock>

        <div className = "calendar">
          <div className ="dates">Sun Mon Tue Wed Thu Fri Sat</div>
          <button id="first">27</button>
          <button id="second">28</button>
          <button id="third">29</button>
          <button id="fourth">30</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>11</button>
          <button>12</button>
          <button>13</button>
          <button>14</button>
          <button>15</button>
          <button>16</button>
          <button>17</button>
          <button>18</button>
          <button>19</button>
          <button>20</button>
          <button>21</button>
          <button>22</button>
          <button>23</button>
          <button>24</button>
          <button>25</button>
          <button>26</button>
          <button>27</button>
          <button>28</button>
          <button>29</button>
          <button>30</button>
          <button>31</button>
        </div>

        

        <div className="todayIs">
          <div className="text">Today is {specialDay[randNum]}!
          <div className="dayDetails">{dayDetails[randNum]}</div></div>
        </div>

        <div className = "quotesBox">
        <div className = "quotes">{yes[randNum]}</div>
        </div>

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
