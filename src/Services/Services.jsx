import React from "react";
import './Services.css'
import Heartemoji from '../img/heartemoji.png';
import Glasses from '../img/glasses.png';
import Humble from '../img/humble.png';
import Card from '../components/Card/Card'
import { motion } from "framer-motion";


const Services = () => {
    const transition = {duration : 1, type : 'spring'}
    return (
        <div className="services" id = 'Services'>
            {/* left side */}
            <div className="awesome">
            <span>My Achievements &</span>
            <span>Awards</span>
            <span>
                For more information<br />
                Download my CV
            </span>
            <a>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blurl" style = {{background : "#ABF1FF94"}}>
            </div>
            </div>
            {/* right side */}
            <div className="cards">
            
                <motion.div 
                initial = {{left : '30%'}}
                whileInView = {{left : '19rem'}}
                transition = {transition}
                style={{left : '27rem'}}>
                    <Card
                    emoji = {Heartemoji}
                    heading = {'Programming'}
                    detail = {"C++,Python,Javascript, and also logical ability to solve problems"} 
                    />
                </motion.div>
                <motion.div
                 initial={{ left: "-6rem", top: "12rem" }}
                whileInView={{ left: "1rem" }}
                transition={transition}
                
                 style={{top : "12rem" , left : "6rem"}}>
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"HTML,CSS,JavaScript,React and developed various websites by using all of them"} 
                    />
                </motion.div>
                <motion.div
                initial={{ top: "19rem", left: "30rem" }}
                whileInView={{ left: "17rem" }}
                transition={transition}
                
                 style={{top : "19rem" , left : "22rem"}}>
                <Card
                    emoji = {Humble}
                    heading = {'Achievements School'}
                    detail = {
                        "Top Scorer in Mathematics class 12th(99/100) , Grade A1 in all subjects in Class 10th(10CGPA)"
                    } 
                    />
                </motion.div>
            </div>
        </div>
    )
    }

export default Services;