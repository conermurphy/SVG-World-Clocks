import React from 'react';
import SVGCircleStyles from "./SVGCircleStyles.module.css";

const SVGCircle = ({ type, radius }) => {
    if (type === "hour") {
      return (<svg className={SVGCircleStyles.hourCircleSvg}><path fill="none" stroke="#333" strokeWidth="6" d={describeArc(50, 50, 100, 0, radius)}/></svg>);
    } else if (type === "minute") {
      return (<svg className={SVGCircleStyles.minuteCircleSvg}><path fill="none" stroke="#333" strokeWidth="6" d={describeArc(50, 50, 90, 0, radius)}/></svg>);
    } else {
      return (<svg className={SVGCircleStyles.secondCircleSvg}><path fill="none" stroke="#333" strokeWidth="6" d={describeArc(50, 50, 80, 0, radius)}/></svg>);
    }
};

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  function describeArc(x, y, radius, startAngle, endAngle){
  
      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);
  
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
  
      return d;       
  }

export default SVGCircle