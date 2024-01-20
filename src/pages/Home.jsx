import { useState } from 'react';
import '../App.scss';
import '../Reset.css';
import '../components/Area/Area.scss';

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Lessons from '../components/Lessons/Lessons';
import Area from '../components/Area/Area';

function Home() {
  const [isActive, setActive] = useState(false);
  const [room, setRoom] = useState(0);

  const toggleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <main className='main'>
        <Header toggleClick={toggleClick} isActive={isActive} />

        <div className={isActive ? 'main__wrap active' : 'main__wrap'}>
          <Lessons room={room} setRoom={setRoom} />

          <Area room={room} setRoom={setRoom} />

          <Navbar isActive={isActive} />
        </div>
      </main>
    </>
  );
}

export default Home;
