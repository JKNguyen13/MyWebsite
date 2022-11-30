import React from "react";


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

    </div><div className="dailyRecFollowUp">
            <div className="text">Did you enjoy this recommendation?
                <button>Yes</button>
                <button>No</button>
            </div>
        </div></>
);
}

export default DailyRec