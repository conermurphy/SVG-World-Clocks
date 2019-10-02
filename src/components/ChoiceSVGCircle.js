import React from 'react';
import SVGCircleStyles from "./SVGCircleStyles.module.css";

let cx = `37.5vw`;
let cy = `37.5vh`;
let sw = `2.25%`;
let hourDA = Math.max(2 * Math.PI * (window.innerHeight * 0.3375), 1149.351672316);
let minuteDA = Math.max(2 * Math.PI * (window.innerHeight * 0.315), 1191.763173139);
let secondDA = Math.max(2 * Math.PI * (window.innerHeight * 0.2925), 848.230016469);


const ChoiceSVGCircle = ({ type, hour, minute, second }) => {
  const hourRadius = hourDA - ((hourDA/24) * hour);
  const minuteRadius = minuteDA - ((minuteDA/60) * minute);
  const secondRadius = secondDA - ((secondDA/60) * second);

  if (type === "hour") {
    return (<svg id="choiceHourCircle" className={SVGCircleStyles.choiceHourCircleSvg} style={{width: `75vw`, height: `75vh`}}><circle fill="none" stroke="#CE796B" strokeWidth={sw} cx={cx} cy={cy} r="33.75vh" style={{strokeDashoffset: hourRadius, strokeDasharray: hourDA}}/></svg>);
  } else if (type === "minute") {
    return (<svg id="choiceMinuteCircle" className={SVGCircleStyles.choiceMinuteCircleSvg} style={{width: `75vw`, height: `75vh`}}><circle fill="none" stroke="#E7AD99" strokeWidth={sw} cx={cx} cy={cy} r="31.5vh" style={{strokeDashoffset: minuteRadius, strokeDasharray: minuteDA}}/></svg>);
  } else {
    return (<svg id="choiceSecondCircle" className={SVGCircleStyles.choiceSecondCircleSvg} style={{width: `75vw`, height: `75vh`}}><circle fill="none" stroke="#ECC8AF" strokeWidth={sw} cx={cx} cy={cy} r="29.25vh" style={{strokeDashoffset: secondRadius, strokeDasharray: secondDA}}/></svg>);
  }

};

export default ChoiceSVGCircle