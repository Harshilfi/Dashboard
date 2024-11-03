import './Style.scss';
import chapter from '../assets/data';
import clock from '../assets/clock.svg';
import { useState } from 'react';
import arrow from '../assets/arrow.svg';
import PartItem from './PartItem';
export default function ChapterCont(){
    let [index,setIndex]=useState(0)
    const clickHandler=(i)=>{
        setIndex(i)
        console.log(chapter[i].chapname)
    }
    let style1={
        fontWeight: '700',
        color:'var(--blue1)'
    }
    let style2={
        display:'flex'
    }
    return(
        <div className='chaptercontent'>
            <div className="chplist">
            {chapter.map((chp, idx) => (
                <div className='item' onClick={() => clickHandler(idx)}>
                    {idx==index?
                    <div>
                        <p style={style1}>{chp.chapname}</p>
                        <p style={style2} className='duration'>
                            <img src={clock} alt="icon" className="icon" />
                            {chp.duration}</p>
                    </div>:
                    <div>
                        <p>{chp.chapname}</p>
                        <p className='duration'>
                            <img src={clock} alt="icon" className="icon" />
                            {chp.duration}</p>
                    </div>}
                    
                </div>
            ))}
            </div>
            <div className="partcontent">
            {
                chapter[index].content.map((pt)=>(
                    <PartItem
                        {...pt}
                    />
                ))
            }
            </div>
        </div>
    )
}