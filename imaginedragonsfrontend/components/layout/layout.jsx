import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import style from "./layout.module.css";
export default function Layout(props) {

    const overAnimationRef = useRef();

    const router = useRouter();

    useEffect(function () {
        setTimeout(function () {
            overAnimationRef.current.style.display = "none";
        }, 1000)
    }, []);


    const navReferences = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const navReferencesTo = ["home", "tour", "about", "music", "videos", "store"]
    const navReferenesToIcon = ["fa-solid fa-house", "fa-solid fa-plane-arrival", "fa-solid fa-circle-info", "fa-solid fa-headphones", "fa-solid fa-circle-play", "fa-solid fa-shop"]
    let textReferences = navReferencesTo.map((currentUseRef, i) => {
        return (
            <li style={{ display: "flex", gap: "0.7em", alignItems: "center" }} key={i} onClick={(e) => handleNavItemPress(navReferences[i])} ref={navReferences[i]}><i className={navReferenesToIcon[i]}></i>{navReferencesTo[i]}</li>
        )
    });
    function handleNavItemPress(i) {
        navReferences.forEach((e) => {
            e.current.style.color = "white"
        })
        i.current.style.color = "red";
        router.push(navReferencesTo[navReferences.indexOf(i)] == "home" ? "/" : "/"+navReferencesTo[navReferences.indexOf(i)]);
    }


    return (
        <div className={style.divBackground}>

            <div className={style.logoContainer}>
                <img src="assets/images/imaginedragonslogo.png" alt="" />

            </div>

            <nav className={style.navbarStyle}>

                <div className={style.navContainer}>
                    <ul>
                        {textReferences}
                    </ul>
                </div>
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
