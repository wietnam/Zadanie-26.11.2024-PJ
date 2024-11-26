import React from 'react';

function Doctors() {
  return (
    <div className="container my-5">
      <h2 className="text-center">Our Doctors Specialize in You</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <img 
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462559860_1265303767853004_8192680325161186137_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bKQ48wHmD9IQ7kNvgF3el0I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFiKFZfMPEq4zJGEmBefQo5ghQ0qNpcjNZiTSvUgFBYMQ&oe=676D8406"
            alt="Dental Department"
            className="img-fluid mb-3"
          />
          <p>We provide excellent dental care.</p>
        </div>
        <div className="col-md-4">
          <img 
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467070168_8566213140142134_1177257994414478509_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-DaB2m5S0cEQ7kNvgFa4j7R&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEq2kXOD2y3SnHLyFSUbLmY9dXXuEc8GbaPjh259QWy5g&oe=676D60AB"
            alt="Cardiology Department"
            className="img-fluid mb-3"
          />
          <p>We guarantee the best heart care.</p>
        </div>
        <div className="col-md-4">
          <img 
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462568024_378254738684266_8788947933970972172_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=qMBQ64p3agIQ7kNvgHGWfbJ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QF7abnNhW3iF_RfD-YaBA1GcORTfaYTbqCFw9Pu2kxhaA&oe=676D670A"
            alt="Optical Department"
            className="img-fluid mb-3"
          />
          <p>We offer modern treatments for vision problems.</p>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
