import React from 'react';
import review from './Review.css'

const Review = () => {
    return (
        <section className="reviews">
      <div className="container">
        <div className="row">
            <hr />
          <div className="col-md-12 text-center mb-4">
            <h2>Customer Reviews</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="review-card">
              <div className="review-header">
                <h3>Great Food and Service</h3>
                <p>by John Doe</p>
              </div>
              <div className="review-body">
                <p><q>
                The food was amazing and the service was excellent. I highly recommend this restaurant!
                    </q></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review-card">
              <div className="review-header">
                <h3>Wonderful Experience</h3>
                <p>by Jane Smith</p>
              </div>
              <div className="review-body">
                <p>
                    <q>
                    I had a great time at this restaurant. The atmosphere was cozy and the food was delicious. Can't wait to come back!
                    </q>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review-card">
              <div className="review-header">
                <h3>Amazing Meal</h3>
                <p>by Tom Johnson</p>
              </div>
              <div className="review-body">
                <p>
                    <q>
                    I ordered the steak and it was cooked to perfection. The sides were also delicious. I highly recommend this restaurant.
                    </q>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Review;