import React from 'react';

export default function PricingPage() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Pricing Plans</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Basic Plan */}
        <div className="col">
          <div className="card h-100 text-center border-primary">
            <div className="card-header bg-primary text-white">
              <h4 className="my-0">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$9<small className="text-muted">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>1 user included</li>
                <li>10 GB storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button className="btn btn-outline-primary">Add </button>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col">
          <div className="card h-100 text-center border-success">
            <div className="card-header bg-success text-white">
              <h4 className="my-0">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$29<small className="text-muted">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>5 users included</li>
                <li>100 GB storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button className="btn btn-outline-success">Get Started</button>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col">
          <div className="card h-100 text-center border-dark">
            <div className="card-header bg-dark text-white">
              <h4 className="my-0">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$99<small className="text-muted">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Unlimited users</li>
                <li>1 TB storage</li>
                <li>Phone & email support</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="btn btn-outline-dark">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
