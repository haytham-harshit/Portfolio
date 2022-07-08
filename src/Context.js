import {createContext, useReducer} from "react";
import { act } from "react-dom/test-utils";

export const themeContext = createContext();

const initialState = {darkMode: false};
const themeReducer = (state,action) => {
    switch(action.type){
        case 'toggle':
            return {darkMode : !state.darkMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state,dispatch] = useReducer(themeReducer,initialState);
    return (
        <themeContext.Provider value = {{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
}