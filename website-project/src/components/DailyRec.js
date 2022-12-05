import React from "react";
import './DailyRecStyle.css';


 function Yes(){
    alert("Cool! We'll take that into consideration :)");
 }

 function No(){
    alert("Maybe you'll like the one tomorrow!");
    /*IncrementItem = () => {
    this.setState({click: this.state.click + 1});
    }*/
}


function DailyRec(){
    const dailyRecLink = ["https://www.youtube.com/watch?v=sBspSJWRT2E&ab_channel=QueenOfficial","https://www.youtube.com/watch?v=kTJczUoc26U&ab_channel=TheKidLAROIVEVO","https://www.youtube.com/watch?v=Tc0tLGWIqxA&ab_channel=PostMaloneVEVO","https://www.youtube.com/watch?v=Brm1ribq7WU&ab_channel=NIKI-Topic"]
    const randomGenre = [" Rock", " Pop", " Hip hop", " R&B"]
    const randNum = Math.floor(Math.random() * 4)
    var permNumber = 1;
    /*this.state = {
        click: 0
    }*/

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

    </div><div className="dailyRecFollowUp">
            <div className="text">Did you enjoy this recommendation?
                <button onClick={Yes}>Yes</button>
                <button onClick={No}>No</button>
            </div>
        </div></>
);
}

export {DailyRec, Yes, No}