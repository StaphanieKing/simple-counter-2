//import react into the bundle
import { checkPropTypes } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

let counter = 0;
setInterval(function(){
   const five = Math.floor(counter/1000);
   const four = Math.floor(counter/1000);
   const three = Math.floor(counter/100);
   const two = Math.floor(counter/10);
   const one = Math.floor(counter/1);
   console.log(four,three,two,one);

   counter++;

//render your react application
ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, document.querySelector("#app")
);
},1000);


function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="calender">
        <i class="fa fa-clock"></i>   
        </div>
       <div className="four">{props.digitFour% 10}</div>
        <div className="three">{props.digitThree% 10}</div>
        <div className="two">{props.digitTwo% 10}</div>
        <div className="one">{props.digitOne % 10}</div>
       </div>);
}
SimpleCounter.proptypes ={
    digitFour:checkPropTypes.number,
    digitThree:checkPropTypes.number,
    digitTwo:checkPropTypes.number,
    digitOne:checkPropTypes.number


};

