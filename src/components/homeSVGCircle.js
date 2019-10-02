import React from 'react';
import SVGCircleStyles from "./SVGCircleStyles.module.css";

let cx = `50vw`;
let cy = `50vh`;
let hourDA = Math.max(2 * Math.PI * (window.innerHeight * 0.45), 2298.703344632);
let minuteDA = Math.max(2 * Math.PI * (window.innerHeight * 0.42), 2383.526346279);
let secondDA = Math.max(2 * Math.PI * (window.innerHeight * 0.39), 1696.460032938);


const HomeSVGCircle = ({ type, hour, minute, second }) => {
  const hourRadius = hourDA - ((hourDA/24) * hour);
  const minuteRadius = minuteDA - ((minuteDA/60) * minute);
  const secondRadius = secondDA - ((secondDA/60) * second);

  if (type === "hour") {
    return (<svg id="homeHourCircle" className={SVGCircleStyles.homeHourCircleSvg} style={{width: `100vw`, height: `100vh`}}><circle fill="none" stroke="#CE796B" strokeWidth="3vh" cx={cx} cy={cy} r="45vh" style={{strokeDashoffset: hourRadius, strokeDasharray: hourDA}}/></svg>);
  } else if (type === "minute") {
    return (<svg id="homeMinuteCircle" className={SVGCircleStyles.homeMinuteCircleSvg} style={{width: `100vw`, height: `100vh`}}><circle fill="none" stroke="#E7AD99" strokeWidth="3vh" cx={cx} cy={cy} r="42vh" style={{strokeDashoffset: minuteRadius, strokeDasharray: minuteDA}}/></svg>);
  } else {
    return (<svg id="homeSecondCircle" className={SVGCircleStyles.homeSecondCircleSvg} style={{width: `100vw`, height: `100vh`}}><circle fill="none" stroke="#ECC8AF" strokeWidth="3vh" cx={cx} cy={cy} r="39vh" style={{strokeDashoffset: secondRadius, strokeDasharray: secondDA}}/></svg>);
  }

};

export default HomeSVGCircle