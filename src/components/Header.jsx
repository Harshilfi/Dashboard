import './Style.scss';
import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import ExpandedMenu from './ExpandedMenu';
export default function Header(){
    const [expanded, setexpanded] = useState(false);
    const toggle = () => {setexpanded(!expanded);};
    return(
        <div>
            <nav className='header'>
                <div>
                    <div className="menu" onClick={toggle}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src={logo} alt="AlgoZenith" className="logo" />
                </div>
                {expanded && <ExpandedMenu/>}
            </nav>
            
        </div>
    )
}