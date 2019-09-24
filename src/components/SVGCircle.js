import React from 'react';
import SVGCircleStyles from "./SVGCircleStyles.module.css";

const SVGCircle = ({ type, radius }) => {

  if (type === "hour") {
    return (<svg className={SVGCircleStyles.hourCircleSvg}><circle fill="none" stroke="#CE796B" strokeWidth="10" cx="7.5rem" cy="7.5rem" r="90" style={{strokeDashoffset: radius, strokeDasharray: `565`}}/></svg>);
  } else if (type === "minute") {
    return (<svg className={SVGCircleStyles.minuteCircleSvg}><circle fill="none" stroke="#E7AD99" strokeWidth="10" cx="7.5rem" cy="7.5rem" r="80" style={{strokeDashoffset: radius, strokeDasharray: `503`}}/></svg>);
  } else {
    return (<svg className={SVGCircleStyles.secondCircleSvg}><circle fill="none" stroke="#ECC8AF" strokeWidth="10" cx="7.5rem" cy="7.5rem" r="70" style={{strokeDashoffset: radius, strokeDasharray: `440`}}/></svg>);
  }

};

export default SVGCircle