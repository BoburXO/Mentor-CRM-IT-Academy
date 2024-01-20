import React, { useEffect, useState } from 'react';
import './Area.scss';
import axios from 'axios';
import Loading from '../Loading';

const Area = ({ setRoom }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get('https://riot.pythonanywhere.com/rooms/')
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  if (!rooms.length) {
    return <Loading />;
  }
  return (
    <section className='hero area main-area'>
      <div className='container'>
        <div className='hero__wrapper area__wrapper'>
          {rooms?.map((el) => {
            return (
              <div
                key={el?.id}
                style={{
                  backgroundImage: `url(${el.image})`,
                }}
                className={`area__item area-${el?.rn}`}
                onClick={() => setRoom(el?.rn)}
              >
                {el?.rn}. {el?.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className='add'>
        <a
          className='add__btn'
          target='blank_'
          href='https://riot.pythonanywhere.com/admin/rooms/'
        >
          +
        </a>
      </div>
    </section>
  );
};

export default Area;
