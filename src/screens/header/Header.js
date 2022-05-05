import React from 'react';
import Typed from 'react-typed';
import './header.css';

function Header() {
  return (
    <div className='main-info'>
        <h1>What Am I?</h1>
        <Typed
            strings={[
                ' ',
                'A Software Engineer',
                'A Front-end Developer',
                'A Back-end Developer',
                'OR',
                'A Coder',
                ' ']}
                typeSpeed={60}
                backSpeed={70}
                loop 
        />
    </div>
  )
}

export default Header