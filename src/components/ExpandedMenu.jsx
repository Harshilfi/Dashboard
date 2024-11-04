import './Style.scss';
import dshbrd from '../assets/dashboard.svg';
import bulb from '../assets/bulb.svg';
import people from '../assets/people.svg';
import pad from '../assets/writingpad.svg';
import graph from '../assets/graph.svg';
import star from '../assets/star.svg';
import { useState } from 'react';
export default function ExpandedMenu({ onMenuClick, selectedOption }){
    const menuItems = [
        { id: 'Dashboard', icon: dshbrd, text: 'Dashboard' },
        { id: 'Learn', icon: bulb, text: 'Learn' },
        { id: 'Forums', icon: people, text: 'Forums' },
        { id: 'Upskill', icon: pad, text: 'Upskill' },
        { id: 'Contest', icon: graph, text: 'Contest' },
        { id: 'Leaderboard', icon: star, text: 'Leaderboard' },
      ];
    return(
        <div className="expandedmenu">
            {menuItems.map((item) => (
                <div key={item.id} onClick={() => onMenuClick(item.id)} className={selectedOption === item.id ? 'selected' : ''}>
                    <img src={item.icon} alt="icon" className="icon" />
                    <p className="menutext">{item.text}</p>
                </div>
            ))}
    </div>
    )
}