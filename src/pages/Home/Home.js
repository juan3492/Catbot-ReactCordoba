import React from 'react';
import Cat from './components/Cat/Cat.jsx';
import './Home.css';
import Fade from 'react-reveal/Fade'

const Home = ({ history }) => {
    return (
        <div className='home-catbot-container' >
          <div className='home-catbot-content'>
            <div className='cat-cont'>
              <Cat history={history} />
            </div>
            <div className='home-catbot-greeting'>
              <Fade opposite>
                <h1> ¡Hola humano! </h1>
              </Fade>
              <Fade opposite>
                <label>¿Querés charlar?</label>
                <label> Click sobre mí para comenzar c: </label>
              </Fade>
            </div>
          </div>
        </div>
    )
};

export default Home;