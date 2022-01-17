import React, { useState, useRef, useEffect } from 'react'
import music from '../penguine.mp3';
export default function Circle() {
    const ref = useRef(null);
    const [toggle, setToggle] = useState(false)
    const audio = new Audio('./penguine.mp3');
    const handleUser = () => {
        toggle ? setToggle(false) : setToggle(true);
        audio.play();
    }
    return (
        <div>
            <div onClick={handleUser} className="loader">
                <section className={toggle ? 'animate' : 'face gold'}>
                    <div className="circle "></div>
                </section>
                <section className={toggle ? 'animate' : 'face lime'}>
                    <div className="circle"></div>
                </section>
                <section className={toggle ? 'animate' : 'face blue'}>
                    <div className="circle"></div>
                </section>
                <section className={toggle ? 'animate' : 'face green'}>
                    <div className="circle"></div>
                </section>
                <section className={toggle ? 'animate' : 'face last'}>
                    <div className="circle"></div>
                </section>
            </div>
        <button className='btn'><a href={music} download="penguine.mp3"> Download Here </a></button>
        </div>
    )
}
