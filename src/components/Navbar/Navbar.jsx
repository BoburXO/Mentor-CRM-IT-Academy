import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import axios from 'axios';

const Navbar = ({ isActive }) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get('https://riot.pythonanywhere.com/teachers/')
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <nav className={isActive ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='navbar__top'>
          <img
            className='navbar__logo'
            src='https://it-academy.t8s.ru/Files/IT-Academy.t8s.ru/Photos/dmrs1c2n.ctw.jpg'
            alt=''
          />
          <h1 className='navbar__title'>IT Academy Teachers</h1>
        </div>

        <div className='navbar__menu'>
          {teachers?.map((teacher) => {
            return (
              <span key={teacher?.id} className='navbar__item'>
                <img
                  className='navbar__icon'
                  src={teacher?.avatar}
                  alt={teacher?.first_name}
                />
                <p className='navbar__name'>
                  {teacher?.first_name} {teacher?.last_name}
                </p>
              </span>
            );
          })}
        </div>
      </div>
      <div className='add'>
        <a
          className='add__btn'
          target='blank_'
          href='https://riot.pythonanywhere.com/admin/teachers/'
        >
          +
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
