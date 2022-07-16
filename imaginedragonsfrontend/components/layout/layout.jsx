import React, { useEffect, useRef } from 'react'
import style from "./layout.module.css";
export default function Layout(props) {

    const overAnimationRef = useRef();

    useEffect(function () {
        setTimeout(function () {
            overAnimationRef.current.style.display = "none";
        }, 1000)
    }, []);

    return (
        <div className={style.divBackground}>
            <nav className={style.navbarStyle}>
                <img src="assets/images/imaginedragonslogo.png" alt=""/>
            </nav>




            <main>
                {props.children}
            </main>



            <div className={style.overlayAnimation} ref={overAnimationRef}>
                <img src="assets/images/intro_overlay_left.png" alt="" />
                <img src="assets/images/intro_overlay_right.png" alt="" />

            </div>
        </div>
    )
}
