import React, { useState } from 'react';
import newsLetter from './NewsLetter.css'

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Subscribed with email: ${email}`);
      
    }

    return (
        <div>
     <section className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className='text-white'>Join Our Newsletter</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-white">
            <p>Sign up for our newsletter to receive exclusive deals and updates on our latest menu items.</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className='text-white'>Enter your email:</label>
              <input type="email"  name="email" value={email} onChange={handleEmailChange} className='border-0 rounded ms-3 ' required />
              <button className='bg-info rounded text-light border-0' type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default NewsLetter;