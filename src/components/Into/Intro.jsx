import React from "react";
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../../components/FloatingDiv/FloatingDiv.jsx";
import { motion } from "framer-motion";
import harshitimage from '../../img/harshitupdated.png';

const Intro = () => {
    const transition = {duration : 2, type : 'spring' }
    return (
        <div className="intro">
            <div className="i-left">
            <div className = "i-name">
                <span>Hy! I am</span>
                <span>Harshit Rajput</span>
                <span>Undergrad at Delhi Technological
                University<br/>
                Electronics and Communication Engineering(8.67 CGPA)</span>
            </div>
            <button className="button i-button">
                Hire Me
            </button>
            <div className="i-icons">
                <a href="https://github.com/haytham-harshit">
                <img src = {Github} alt = "" />
                </a>
                <a href="https://www.linkedin.com/in/harshit-rajput-ba3a85195/.google.com">
                <img src = {Linkedin} alt = "" />
                </a>
            </div>
            </div>
            <div className="i-right">
                <img src = {Vector1} alt ="" />
                <img src = {Vector2} alt ="" />
                <img src = {harshitimage} alt ="" />
                <motion.img 
                initial = {{left : '-36%'}}
                whileInView = {{left : "-24%"}}
                transition = {transition}
                src = {glassesimoji} alt = "" />
                <motion.div
                initial ={{top : '-4%' , left : '74%'}}
                whileInView = {{left : '68%'}}
                transition = {transition}
                 style={{top: '-4%' , left : '68%'}}
                 className = "floating-div"
                 >
                    <FloatingDiv image = {crown} txt1 = "Web" txt2 = "Developer" />
                </motion.div>
                <motion.div
                initial = {{left : '9rem' , top : '18rem'}}
                whileInView = {{left : '0rem'}}
                transition = {transition}
                 style={{top : '18rem' , left : '0rem'} }
                 className = "floating-div">
                    <FloatingDiv image = {thumbup} txt1 = "Best" txt2 = "Design" />
                </motion.div>
                {/* blurdivs */}
                <div className="blur" style
                ={{background : "rgb(238 210 255)" }}>
                </div>
                <div className="blur" 
                style={{
                    background : "#C1F5FF",
                    top : '17rem',
                    width : '21rem',
                    height : '11rem',
                    left : '-9rem'
                }}>
                </div>
            </div>
        </div>
    )
}
export default Intro;