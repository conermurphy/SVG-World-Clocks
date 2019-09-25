import React from 'react';
import SVGCircleStyles from "./SVGCircleStyles.module.css";

const HomeSVGCircle = ({ type, radius }) => {

  if (type === "hour") {
    return (<svg className={SVGCircleStyles.homeHourCircleSvg}><circle fill="none" stroke="#CE796B" strokeWidth="2.5rem" cx="32.5rem" cy="32.5rem" r="30rem" style={{strokeDashoffset: radius, strokeDasharray: `3016`}}/></svg>);
  } else if (type === "minute") {
    return (<svg className={SVGCircleStyles.homeMinuteCircleSvg}><circle fill="none" stroke="#E7AD99" strokeWidth="2.5rem" cx="32.5rem" cy="32.5rem" r="27.5rem" style={{strokeDashoffset: radius, strokeDasharray: `2765`}}/></svg>);
  } else {
    return (<svg className={SVGCircleStyles.homeSecondCircleSvg}><circle fill="none" stroke="#ECC8AF" strokeWidth="2.5rem" cx="32.5rem" cy="32.5rem" r="25rem" style={{strokeDashoffset: radius, strokeDasharray: `2513`}}/></svg>);
  }

};

export default HomeSVGCircle