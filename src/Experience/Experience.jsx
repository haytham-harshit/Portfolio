import React from "react";
import './Experience.css';
import {themeContext} from '../Context'
import {useContext} from "react";

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id = 'Experiences' >
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>600+</div>
                <span style={{color: darkMode?'white':''}}>Questions</span>
                <span>on All Coding Platforms</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>4</div>
                <span style={{color: darkMode?'white':''}}>star</span>
                <span>Codechef</span>
        </div>
        <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>81</div>
                <span style={{color: darkMode?'white':''}}>Global Rank</span>
                <span>Codechef</span>
        </div>
        </div>
    )
}
export default Experience;