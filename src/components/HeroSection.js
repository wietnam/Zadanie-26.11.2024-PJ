import React from 'react';

function HeroSection() {
    return (
        <div className="container my-5 text-center">
          <h1 className="mb-3">Online Appointment</h1>
          <p className="text-muted">Medical Functional is most focused on helping you discover your most beautiful smile.</p>
          <img 
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1lZGljYWwlMjBEb2N0b3J8ZW58MHx8MHx8fDA%3D" 
            alt="Doctor"
            className="img-fluid mb-3"
          />
          <button className="btn btn-primary me-3">Get Consultation</button>
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
      );
    }
export default HeroSection;
