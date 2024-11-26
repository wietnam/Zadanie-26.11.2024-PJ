import React from 'react';
import zdjecie123 from './Bez nazwy.png'
function Footer() {
  return (
    <footer className="bg-light text-center py-5">
      <img 
            src= {zdjecie123}
            alt="Priority Support"
            className='zdjecie2'

          />
      <h2>Each and Every Client is Important</h2>
      <p>See what our happy clients have to say about our services.</p>
    
    </footer>
  );
}

export default Footer;
