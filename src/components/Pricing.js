import React from 'react';

function Pricing() {
  return (
    <div className="container my-5 text-center">
      <h2>Pricing</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <img 
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462569178_559285286744015_5860894495923368865_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cMPnpHVtoIAQ7kNvgF11y1v&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QH_CFN8R2cWnIxCkyAO-EOjTiginkyrbizB-J9se6x9DQ&oe=676D6576"
            alt="Free"
            className="img-fluid mb-3"
          />
          <p>Basic services are free of charge.</p>
        </div>
        <div className="col-md-4">
          <img 
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/465524274_966040425335595_3660537867396628342_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=A7A6zQxbTygQ7kNvgHKE2mO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QF59Xsu2qqIgbVYa0oOg3e2S8o3Tc0lRj7q1U-YTguCIg&oe=676D59FB"
            alt="Advanced Features"
            className="img-fluid mb-3"
          />
          <p>Advanced features and services.</p>
        </div>
        <div className="col-md-4">
          <img 
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/466898667_888607786694260_6501321113270525998_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CxOMeviidJgQ7kNvgGmbKai&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFt6X_JbZsC1y2K-5uuUVfP8CXSTcIxvrDSoCC2xKxjhw&oe=676D6778"
            alt="Priority Support"
            className="img-fluid mb-3"
          />
          <p>Priority support included.</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
