// Dropdown.js
import React, { useState, useRef } from 'react';
import { usePopper } from 'react-popper';

function Dropdown({ children, menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(toggleRef.current, menuRef.current, {
    placement: 'bottom-end',
    modifiers: [
      { name: 'offset', options: { offset: [0, 8] } },
      { name: 'preventOverflow', options: { padding: 24 } },
    ],
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button ref={toggleRef} onClick={toggleDropdown} className="dropdown-toggle">
        {children}
      </button>
      <div
        ref={menuRef}
        style={styles.popper}
        {...attributes.popper}
        className={`dropdown-menu ${isOpen ? '' : 'hidden'}`}
      >
        {menu}
      </div>
      {isOpen && <div className="dropdown-overlay" onClick={closeDropdown}></div>}
    </div>
  );
};

export default Dropdown;
