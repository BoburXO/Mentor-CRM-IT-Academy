import React, { useContext } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import burger from '/public/burger.svg';
import fffburger from '/public/fff-burger.png';
import Toggle from '../Toggle/Toggle';
import { ThemeContext } from '../../ThemeContext';

const Header = ({ toggleClick, isActive }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <Link to='/'>
              <h1
                style={{
                  color: !darkMode ? '#222' : 'white',
                }}
              >
                IT ACADEMY - CRM
              </h1>
            </Link>
            <span className='header__twise'>
              <Toggle />

              {!darkMode ? (
                <svg
                  onClick={toggleClick}
                  className={`burger burger-svg ${isActive ? 'active' : null}`}
                  width='36px'
                  height='36px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 18L20 18'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 12L20 12'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 6L20 6'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              ) : (
                <svg
                  onClick={toggleClick}
                  className={`burger burger-svg ${isActive ? 'active' : null}`}
                  width='36px'
                  height='36px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 18L20 18'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 12L20 12'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 6L20 6'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
