import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSubtract } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, response }) => {
  const [activeAccordion, setActiveAccordion] = useState(false);

  const toggleClassAccordion = () => {
    setActiveAccordion((prev) => !prev);
  };

  return (
    <div className="accordion__container">
      <div onClick={toggleClassAccordion} className="accordion__duvida">
        <div className="accordion__duvida-title">
          <h3 className="accordion__title">{title}</h3>
        </div>
        <FontAwesomeIcon
          icon={activeAccordion ? faSubtract : faPlus}
          className="accordion__icon"
        />
      </div>

      <div
        className={
          activeAccordion
            ? "accordion__container-resposta active"
            : "accordion__container-resposta"
        }
      >
        <p className="accordion__resposta">{response}</p>
      </div>
    </div>
  );
};

export default Accordion;
