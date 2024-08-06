'use client'
import React from 'react';
import { useState } from 'react';

export const Accordion = ({ children, ...props }) => {
  return (
    <div className="accordion" {...props}>
      {children}
    </div>
  );
};

export const AccordionItem = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item" {...props}>
      <AccordionTrigger isOpen={isOpen} setIsOpen={setIsOpen} />
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </div>
  );
};

export const AccordionTrigger = ({ isOpen, setIsOpen, children, ...props }) => {
  return (
    <button
      className={`accordion-trigger ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <AccordionChevron isOpen={isOpen} />
    </button>
  );
};

export const AccordionChevron = ({ isOpen }) => {
  return (
    <svg
      className={`accordion-chevron ${isOpen ? 'open' : ''}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export const AccordionContent = ({ isOpen, children, ...props }) => {
  return (
    <div
      className={`accordion-content ${isOpen ? 'open' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

