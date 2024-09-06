import React from "react";
import CV from "../../assets/AhsanYousafResume.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's talk
        </a>
      </div>
    </div>
  );
};

export default CTA;
