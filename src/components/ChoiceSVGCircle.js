import React from 'react';
import SVGCircleStyles from "./styles/SVGCircleStyles.module.css";

let cx = `50`;
let cy = `50`;
let sw = `3px`;
let hourDA = Math.max(2 * Math.PI * 40);
let minuteDA = Math.max(2 * Math.PI * 37);
let secondDA = Math.max(2 * Math.PI * 34);


const ChoiceSVGCircle = ({ type, hour, minute, second }) => {
  const hourRadius = hourDA - ((hourDA/24) * hour);
  const minuteRadius = minuteDA - ((minuteDA/60) * minute);
  const secondRadius = secondDA - ((secondDA/60) * second);

  if (type === "hour") {
    return (<svg id="choiceHourCircle" className={SVGCircleStyles.choiceHourCircleSvg} viewBox={`0 0 100 100`}><circle fill="none" stroke="#1D70A2" strokeWidth={sw} cx={cx} cy={cy} r="40" style={{strokeDashoffset: hourRadius, strokeDasharray: hourDA}}/></svg>);
  } else if (type === "minute") {
    return (<svg id="choiceMinuteCircle" className={SVGCircleStyles.choiceMinuteCircleSvg} viewBox={`0 0 100 100`}><circle fill="none" stroke="#2892D7" strokeWidth={sw} cx={cx} cy={cy} r="37" style={{strokeDashoffset: minuteRadius, strokeDasharray: minuteDA}}/></svg>);
  } else {
    return (<svg id="choiceSecondCircle" className={SVGCircleStyles.choiceSecondCircleSvg} viewBox={`0 0 100 100`}><circle fill="none" stroke="#6DAEDB" strokeWidth={sw} cx={cx} cy={cy} r="34" style={{strokeDashoffset: secondRadius, strokeDasharray: secondDA}}/></svg>);
  }

};

export default ChoiceSVGCircle