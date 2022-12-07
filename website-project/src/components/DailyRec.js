import React, { createElement } from "react";
import './DailyRecStyle.css';


var upVotes = 1;
let hi = false;
Boolean(hi);

 function Yes(){
    alert("Cool! We'll take that into consideration :)");
    let hi = true;
    Boolean(hi);
    upVotes++;
 }

 function No(){
    alert("Maybe you'll like the one tomorrow!");
    /*IncrementItem = () => {
    this.setState({click: this.state.click + 1});
    }*/
    
}

function secondRound(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("dailyRecFollowUp")
    const newContent = document.createTextNode("Test Test");
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("");
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
    
    

return(
    
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

    </div><div className="dailyRecFollowUp" id="dailyRecFollowUp">
            <div className="text">Did you enjoy this recommendation?
                <button onClick={secondRound}>Yes {upVotes}</button>
                <button onClick={No}>No</button>
            </div>
        </div></>

        
);
}

export default DailyRec