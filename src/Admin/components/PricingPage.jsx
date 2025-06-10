import React from 'react';

export default function PricingPage({CoursesNames}) {
  return (
    <div className="container py-3">
      <h4 className="text-center mb-5">Choose a plan that fits your learning goals</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Basic Plan */}
         <div className="col-md-12 mb-4">
            <div className="card h-100 shadow-lg border-primary">
              <div className="card-body" >
                {
                  CoursesNames && CoursesNames.length > 0 ? (
                  CoursesNames.map(course => (
                        <h5>{course.course_name}</h5>
                  ))
                  ):(
                      <p>No courses added yet.</p>
                  )
                }
                {/* <h5 className="card-title"> <strong> {CoursesNames} </strong></h5> */}
                
                <h6 className="card-price text-primary">$19/month</h6>
                <ul className="list-unstyled my-3">
                  <li>✅ Access to all courses</li>
                  <li>✅ Certificate on completion</li>
                  <li>🚫 No mentor support</li>
                </ul>
                <button className="btn btn-primary w-100">Choose Plan</button>
              </div>
            </div>
          </div> 
        {/* <div className="col">
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
        </div> */}
      </div>
    </div>
  );
}
