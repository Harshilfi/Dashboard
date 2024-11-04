import './Style.scss';
import calendar from '../assets/calendar.svg';
import suitcase from '../assets/briefcase.svg';
import info from '../assets/info.svg';
import ChapterCont from './ChapterCont';
import { useState } from 'react';
export default function LearningCont(){
    let [isLearningMat, setisLearningMat]=useState(false)
    let [isMentorSession, setisMentorSession]=useState(false)
    const setMenu1=()=>{
        setisMentorSession(true)
        setisLearningMat(false)
    }
    const setMenu2=()=>{
        setisLearningMat(true)
        setisMentorSession(false)
    }
    return(
        <main className='upskillcont'>
            <div className='container'>
                <div className='submenu'>
                    <div className={`item ${isMentorSession ? 'selected' : ''}`} onClick={setMenu1}>
                        <img src={calendar} alt="icon" className="icon" />
                        <p className="submenutext">Mentor Sessions</p>
                    </div>
                    <div className={`item ${isLearningMat ? 'selected' : ''}`} onClick={setMenu2}>
                        <img src={suitcase} alt="icon" className="icon" />
                        <p className="submenutext">Learning Material</p>
                    </div>
                </div>
                <div className="item working">
                    <img src={info} alt="icon" className="icon" />
                    <p className="submenutext">How it works</p>
                </div>
            </div>
            {
                isLearningMat && <div className='chapters'>
                <ChapterCont/></div>
            }
            {
                isMentorSession && <p className='mentorsess'>no Mentor sessions available.</p>
            }
        </main>
    )
}