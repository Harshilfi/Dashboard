import './Style.scss';
import dshbrd from '../assets/dashboard.svg';
import bulb from '../assets/bulb.svg';
import people from '../assets/people.svg';
import pad from '../assets/writingpad.svg';
import graph from '../assets/graph.svg';
import star from '../assets/star.svg';
import { useState } from 'react';
export default function ExpandedMenu(){
    return(
        <div className='expandedmenu'>
            <div>
                <img src={dshbrd} alt="icon" className="icon" />
                <p className="menutext">Dashboard</p>
            </div>
            <div>
                <img src={bulb} alt="icon" className="icon" />
                <p className="menutext">Learn</p>
            </div>
            <div>
                <img src={people} alt="icon" className="icon" />
                <p className="menutext">Forums</p>
            </div>
            <div>
                {<img src={pad} alt="icon" className="icon" />}
                <p className="menutext">Upskill</p>
            </div>
            <div>
                <img src={graph} alt="icon" className="icon" />
                <p className="menutext">Contest</p>
            </div>
            <div>
                <img src={star} alt="icon" className="icon" />
                <p className="menutext">Leaderboard</p>
            </div>
        </div>
    )
}