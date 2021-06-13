import React, { useEffect, useState } from "react";
import blogDetailsImage1 from "@images/blog/blog-d-1.jpg";
import blogDetailsImage2 from "@images/blog/blog-d-2.jpg";
const BmFourthContent = () => {
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={blogDetailsImage1} alt="" />
                <span>Technology</span>
              </div>

              <div className="blog-one__content">
                <h3>
                  <a href="#">Product heading goes here</a>
                </h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
                <div className="row mt-4 mb-3">
                  <div className="col-md-5">
                    <img src={blogDetailsImage2} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-7">
                    <p>
                      Podcasting operational change management inside of
                      workflows to establish a framework. Taking seamless key
                      performance indicators offline to maximise the long tail.
                      Keeping your eye on the ball while performing a deep dive
                      on the start-up mentality to derive convergence on
                      cross-platform integration.
                    </p>
                  </div>
                </div>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas. Dramatically maintain clicks-and-mortar
                  solutions without functional solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmFourthContent;
