import React from 'react';

function Activity() {
    return (
        <div className="container text-center my-5">
          <h2>Our Activity</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <img 
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467367612_8750218741732001_2459483194404094242_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=heJmMW8vjDgQ7kNvgFtr0rU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEeyqTrAbaLsSJNSPTSJmRELk3lgBG0jKHKWKuaLYYL3w&oe=676D7DE0" 
                alt="Emergency"
                className="img-fluid mb-3"
              />
              <p>Quick response to all emergency situations.</p>
            </div>
            <div className="col-md-4">
              <img 
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/464970869_3966816966975475_8007868788328266396_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TB3uEAt80m0Q7kNvgE4-TTC&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGfJ9zLCieuqkgU_1GMKO9XPrz_qaxniiYLdPr9C1BbqA&oe=676D8E42" 
                alt="Health Query"
                className="img-fluid mb-3"
              />
              <p>Reliable answers to your health questions.</p>
            </div>
            <div className="col-md-4">
              <img 
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/463082618_1718880115577485_8669366289276824164_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=mkwZB0Zq6nwQ7kNvgGn04VH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QF_WeRvE4DpsSwK0BF0BvGiLwDB03tEwzMFFBY6o8SLFA&oe=676D7202" 
                alt="Medical Procedure"
                className="img-fluid mb-3"
              />
              <p>Minimally invasive medical techniques.</p>
            </div>
          </div>
        </div>
      );
    }

export default Activity;
