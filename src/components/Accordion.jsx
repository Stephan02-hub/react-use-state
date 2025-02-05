import { useState } from "react";

export default function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="accordion-card">
      <div className="accordion-name">
        <h3 className="title">{title}</h3>
        <button type="button" onClick={toggleAccordion}>
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {isOpen && (
        <div className="accordion-info">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}