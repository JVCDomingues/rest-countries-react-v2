import React from 'react';

import { FaRegMoon } from "react-icons/fa";

import { HeaderBar } from './styles';

function Header({ toggleTheme }) {
  return (
    <div>
      <HeaderBar>
        <span>Where in the world?</span>

        <button onClick={toggleTheme}>
          <FaRegMoon />
          <p>Dark mode</p>
        </button>
      </HeaderBar>
    </div>
  )
}

export default Header
