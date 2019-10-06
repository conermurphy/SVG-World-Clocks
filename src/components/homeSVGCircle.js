import React from 'react';
import SVGCircleStyles from "./styles/SVGCircleStyles.module.css";

let cx = `50`;
let cy = `50`;
let sw = `3px`;
let hourDA = Math.max(2 * Math.PI * 45);
let minuteDA = Math.max(2 * Math.PI * 42);
let secondDA = Math.max(2 * Math.PI * 39);


const HomeSVGCircle = ({ type, hour, minute, second }) => {
  const hourRadius = hourDA - ((hourDA/24) * hour);
  const minuteRadius = minuteDA - ((minuteDA/60) * minute);
  const secondRadius = secondDA - ((secondDA/60) * second);

  if (type === "hour") {
    return (<svg id="homeHourCircle" className={SVGCircleStyles.homeHourCircleSvg} viewBox={`0 0 100 100`}><circle fill="none" stroke="#CE796B" strokeWidth={sw} cx={cx} cy={cy} r="45" style={{strokeDashoffset: hourRadius, strokeDasharray: hourDA}}/></svg>);
  } else if (type === "minute") {
    return (<svg id="homeMinuteCircle" className={SVGCircleStyles.homeMinuteCircleSvg} viewBox={`0 0 100 100`}><circle fill="none" stroke="#E7AD99" strokeWidth={sw} cx={cx} cy={cy} r="42" style={{strokeDashoffset: minuteRadius, strokeDasharray: minuteDA}}/></svg>);
  } else {
    return (<svg id="homeSecondCircle" className={SVGCircleStyles.homeSecondCircleSvg} viewBox={`0 0 100 100`}><circle fill="none" stroke="#ECC8AF" strokeWidth={sw} cx={cx} cy={cy} r="39" style={{strokeDashoffset: secondRadius, strokeDasharray: secondDA}}/></svg>);
  }

};

export default HomeSVGCircle