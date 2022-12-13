//import React, { createElement } from "react";
import React, {useState} from 'react';
import './DailyRecStyle.css';



let hi = false;
Boolean(hi);

 function Yes(){
    /*return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );*/
    //alert("Cool! We'll take that into consideration :)");
    //let hi = true;
    //Boolean(hi);
    //upVotes++;
 }

 function No(){
    alert("Maybe you'll like the one tomorrow!");
    /*IncrementItem = () => {
    this.setState({click: this.state.click + 1});
    }*/
    
}
//document.body.onload = secondRound;

function secondRound(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("box")
    const newContent = document.createTextNode("text");
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementsByClassName("dailyParent");
    document.body.insertBefore(newDiv, currentDiv);
    return(
 
        <div className="box">
            <div className="text">Check these out!</div>
        </div>
    );
}


function DailyRec(){
    const dailyRecLink = ["https://www.youtube.com/watch?v=sBspSJWRT2E&ab_channel=QueenOfficial","https://www.youtube.com/watch?v=kTJczUoc26U&ab_channel=TheKidLAROIVEVO","https://www.youtube.com/watch?v=Tc0tLGWIqxA&ab_channel=PostMaloneVEVO","https://www.youtube.com/watch?v=Brm1ribq7WU&ab_channel=NIKI-Topic"]
    const randomGenre = [" Rock", " Pop", " Hip hop", " R&B"]
    const randNum = Math.floor(Math.random() * 4)
    const [count, setCount] = useState(0);
    

return(

    <><div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
    
    <><div className="dailyRec">
        <div className="text">Today's Recommendation: 
            <a
                className=""
                href={dailyRecLink[randNum]}
                target="_blank"
                rel="noopener noreferrer"
            >
                {randomGenre[randNum]}
            </a>
        </div>
    </div>
            <div className="dailyParent">
                <div className="dailyRecFollowUp" id="dailyRecFollow">
                    <div className="text">Did you enjoy this recommendation?
                        <button onClick={secondRound}>Yes </button>
                        <button onClick={No}>No</button>
                    </div>
                </div>
            </div>
        </></>

        
);
}

export default DailyRec