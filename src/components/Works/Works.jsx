import React from "react";
import './Works.css';
import Hackerrank from "../../img/hackerrank.jpg";
import codeforces from "../../img/codeforces.png";
import Codechef from "../../img/codechef.jpg";
import gfg from "../../img/gfg.jpg";
import leetcode from "../../img/leetcode.png";
import { motion } from "framer-motion";
// import hh from "../../img/codechef.png"
const Works = () => {
    return (
        <div className="works">
             <div className="awesome">
            <span>Programming on</span>
            <span>Sites</span>
            <span>
                <a href="https://codeforces.com/profile/boii"> 
                Codeforces    150<br />
                </a>
                <a href="https://www.codechef.com/users/connor1">
                Codechef      130<br />
                </a>
                <a href="https://auth.geeksforgeeks.org/user/rharshit2570/practice">
                GeeksforGeeks 150<br />
                </a>
                <a href="https://leetcode.com/rharshit2570/">
                Leetcode      250<br />
                </a>
            </span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blurl" style = {{background : "#ABF1FF94"}}>
            </div>
            </div>

            {/* right side  */}
            <div className="w-right">
            <motion.div
             initial={{ rotate: 45 }}
           whileInView={{ rotate: 0 }}
             viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            
             className="w-mainCircle">
                <div className="w-secCircle">
                    <img src = {codeforces} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {leetcode} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {Codechef} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {Hackerrank} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {gfg} alt = "" />
                </div>
            </motion.div>
            
            {/* background circle */}
            <div className="w-backCircle blueCircle" ></div> 
            <div className="w-backCircle yellowCircle" ></div> 

            </div>
        </div>
    )
}

export default Works;