import './Style.scss';
import clock from '../assets/clock.svg';
import { useState } from 'react';
import arrow from '../assets/arrow.svg';
import papers from '../assets/papers.svg';
import graph from '../assets/graph.svg';
import code from '../assets/code.svg';
import quemark from '../assets/quemark.svg';
import video from '../assets/video.svg';

export default function PartItem(props){
    let substringsToCheck=['Video','Cod','Resource']
    let [visible,setVisible]=useState(false)
    const toggle=()=>{
        setVisible(!visible)
    }
    let style1={
        transform: 'scaleY(-1)'
    }
    return(
        <div className="mainpartitem">
            <div className='partitem' onClick={toggle}>
                <div className='parttitle'>
                    <div>{props.partname.toUpperCase()}</div>
                    <p>{props.desc}</p>
                </div>
                <div className="partdetails">
                    <div>
                        <img src={clock} alt="icon" className="icon" />
                        <span>{props.ptduration}</span>
                    </div>
                    <div>
                        <img src={graph} alt="icon" className="icon" />
                        <span>{props.difficulty}</span>
                    </div>
                    <div>
                        <img src={papers} alt="icon" className="icon" />
                        <span>{props.ptcontent.length}</span>
                    </div>
                    {visible?<img style={style1} src={arrow} alt="" className="icon" />:<img src={arrow} alt="" className="icon" />}
                    
                </div>
                <div className="completion">
                    <span>0% Completed</span>
                    <div></div>
                </div>
            </div>
            {visible && <div className='resources'>
                {props.ptcontent.map((source)=>(
                    <div className='item'>
                        <div className='conttitle'>
                            {source.ctname.includes('Video')?<img src={video} alt="icon" className="icon"/>:null}
                            {source.ctname.includes('Resource')?<img src={papers} alt="icon" className="icon"/>:null}
                            {source.ctname.includes('Cod')?<img src={code} alt="icon" className="icon"/>:null}
                            {substringsToCheck.every(substring => !source.ctname.includes(substring))?<img src={quemark} alt="icon" className="icon"/>:null}
                            <p>{source.ctname}</p>
                        </div>
                        <div>
                            <img src={clock} alt="icon" className="icon" />
                            {source.ctduration}
                        </div>
                    </div>
                ))}
            </div>}
            
        </div>
    )
}
