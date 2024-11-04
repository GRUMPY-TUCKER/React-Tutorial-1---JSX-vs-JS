/*import { Fragment } from "react";

function App(){
    let a = 2;
    return(
        /*cant write anything here */
        /* let a = 2;  Treating as a HTML code*/
        /*<p>{let a = 2}</p> will give error
        <Fragment>
        let a = 2; 
        <p>{a+20}</p>
        <h1>Hello</h1>
        </Fragment>
    )
}*/
import './App.css';
const App = () => {
    let a = 2;
    return(
        <div className="hero">
            <h1 style={{color:'red', backgroundColor:'whitesmoke'}}>Hello</h1>
            <p>{a+20}</p>
        </div>
    )
};

export default App;