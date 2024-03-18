import React, { useState,useEffect, useRef } from "react";

const home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (count < 92) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 10);
  
      return () => clearInterval(interval);
    }, [count]);


    const [rating, setRating] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (rating < 4.9) {
          // Increment the rating by 0.1 each time until it reaches 4.9
          setRating(prevRating => prevRating + 0.1);
        } else {
          clearInterval(interval);
        }
      }, 30);
  
      return () => clearInterval(interval);
    }, [rating]);
  
    // Ensure rating does not exceed 4.9
    const formattedRating = rating >= 4.9 ? "4.9" : rating.toFixed(1);
  return (
    <div>
        {/* Our Services */}
      <div className="njxiuewf">
        <div className="flex space-evenly mt-5">
          <div className="text-align-center">
            <div className="red f10 fw-700">OUR SERVICES</div>
            <div className="fcweugf f28 mt-1 fw-700">
              We provide great services for our customers based on needs
            </div>
          </div>
        </div>
        <div className="flex space-evenly mt-4">
          <div className="flex g2">
            <div className="aihucyfew bg-green flex space-evenly text-align-center">
              <div>
                <div className="cuywyefvx2qu">
                  <img
                    src="./images/graphicDesign.svg"
                    alt=""
                    className="cwuit7fcg2"
                  />
                </div>
                <div className="mt-1 f14 fw-700 white">Graphic Design</div>
                <div className="mt-1 hqayeca white">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </div>
                <div className="flex g1 align-item-center justify-content-center mt-2">
                  <div className="white fw-600 c-pointer">Learn more</div>
                  <img
                    src="./images/rightArrowWhite.svg"
                    alt=""
                    className="uquwdyvxcatw"
                  />
                </div>
              </div>
            </div>
            <div className="aihucyfew bg-blue flex space-evenly text-align-center">
              <div>
                <div className="cuywyefvx2qu">
                  <img
                    src="./images/webDevelopement.svg"
                    alt=""
                    className="advsavtrth"
                  />
                </div>
                <div className="mt-1 f14 fw-700 white">Web Development</div>
                <div className="mt-1 hqayeca white">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </div>
                <div className="flex g1 align-item-center justify-content-center mt-2">
                  <div className="white fw-600 c-pointer">Learn more</div>
                  <img
                    src="./images/rightArrowWhite.svg"
                    alt=""
                    className="uquwdyvxcatw"
                  />
                </div>
              </div>
            </div>
            <div className="aihucyfew bg-red flex space-evenly text-align-center">
              <div>
                <div className="cuywyefvx2qu">
                  <img
                    src="./images/contentWriting.svg"
                    alt=""
                    className="cwuit7fcg2"
                  />
                </div>
                <div className="mt-1 f14 fw-700 white">Content Writing</div>
                <div className="mt-1 hqayeca white">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </div>
                <div className="flex g1 align-item-center justify-content-center mt-2">
                  <div className="white fw-600 c-pointer">Learn more</div>
                  <img
                    src="./images/rightArrowWhite.svg"
                    className="uquwdyvxcatw"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="njxiuewf">
        <div className="flex align-item-center mt-5 g4 hycjwiugcw ">
          <img src="./images/reviewImg.svg" className="xjuwge" alt="" />
          <div>
            <div className="flex g03">
              <img src="./images/star.svg" alt="" className="uxwqetiuqw" />
              <img src="./images/star.svg" alt="" className="uxwqetiuqw" />
              <img src="./images/star.svg" alt="" className="uxwqetiuqw" />
              <img src="./images/star.svg" alt="" className="uxwqetiuqw" />
              <img src="./images/star.svg" alt="" className="uxwqetiuqw" />
            </div>
            <div className="mt-2 fw-700 f14">
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Albino. It was super easy to edit and publish.”
            </div>
            <div className="flex g1 mt-2">
              <span className="f12 fw-700">Franklin Hicks</span>
              <span className="light-grey fw-50">Web Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="flex mt-4 g4 align-item-center njxiuewf">
        <div className="cyqthfbucte">
          <div className="red f10 fw-700">OUR STORY</div>
          <div className="f24 fw-700 mt-2 hcyrkjew">
            We know how everything works and why your business is failing over
            and over again.
          </div>
          <img
            src="./images/ourStoryImg1.png"
            alt=""
            className="mt-4 uxtwggqefc"
          />
        </div>
        <div className="">
          <div className="flex align-item-center nxuqwe">
            <img
              src="./images/ourStoryImg2.png"
              alt=""
              className="xhewiugf2qw3ef"
            />
            <img
              src="./images/OurStoryImg3.png"
              alt=""
              className="mt-4 jcyeuwwec"
            />
          </div>
          <div className="light-grey jxuwyeavew  f16">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand. With lots of unique
            blocks, you can easily build a page without coding. Build your next
            landing page.
          </div>
        </div>
      </div>

      {/* Counts */}
      <div className="flex space-evenly mt-4">
        <div className="text-align-center juycywei">
          <div className="f34 fw-700">1M</div>
          <div className="f12 dark-grey mt-1">
            Customers visit Omega every month to get their service done.
          </div>
        </div>
        <div className="text-align-center juycywei">
          <div className="f34 fw-700">{count}%</div>
          <div className="f12 dark-grey mt-1">
            Satisfaction rate comes from our awesome customers.
          </div>
        </div>
        <div className="text-align-center juycywei">
        <div className="f34 fw-700">
      {formattedRating}/5.0
    </div>
          <div className="f12 dark-grey mt-1">
            Average customer ratings we have got all over internet.
          </div>
        </div>
      </div>
      
      {/* Why choose us */}
      <div className="hcwyjegc">
        <div className="mt-5 hscuwuyfew">
          <div className="flex space-evenly">
            <div className="text-align-center">
              <div className="red f10 fw-700">WHY CHOOSE US</div>
              <div className="fcweugf f28 mt-1 fw-700">
                People choose us because we serve the best for everyone
              </div>
            </div>
          </div>
          <div className="flex justify-content-center g4 mt-5">
            <div>
              <div className="flex scyqywdvxcw">
                <div className="flex g2">
                  <div>
                    <img
                      src="./images/dedicatedManagerIcon.svg"
                      className="uyqiwedc"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="f16 fw-600">Dedicated project manager</div>
                    <div className="mt-1">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 scyqywdvxcw">
                <div className="flex g2">
                  <div>
                    <img
                      src="./images/feedbackIcon.svg"
                      className="uyqiwedc"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="f16 fw-600">Easy feedback sharingr</div>
                    <div className="mt-1">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex scyqywdvxcw">
                <div className="flex g2">
                  <div>
                    <img
                      src="./images/orgTaskIcon.svg"
                      className="uyqiwedc"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="f16 fw-600">Organized tasks</div>
                    <div className="mt-1">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 scyqywdvxcw">
                <div className="flex g2">
                  <div>
                    <img
                      src="./images/neverMissIcon.svg"
                      className="uyqiwedc"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="f16 fw-600">Never miss deadline</div>
                    <div className="mt-1">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-between align-item-center njxiuewf mt-5">
            <div className="uueyqicazqywfd">
              <div className="f20 fw-700">
                Ready to launch your next project?
              </div>
              <div className="mt-1">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </div>
            </div>
            <button className="hcyqac-btn">Get started a project</button>
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="njxiuewf">
        <div className="flex justify-content-center">
          <div className="text-align-center">
            <div className="red f10 fw-700 mt-4">CASE STUDIES</div>
            <div className="fcweugf f28 mt-1 fw-700">
              People choose us because we serve the best for everyone
            </div>
          </div>
        </div>
        <div className="flex justify-content-center mt-4 g3">
          <div>
            <div>
              <img src="./images/caseStudies1.png" alt="" className="uwqiqxz" />
              <div className="pd-1 mt-1">
                <div className="light-grey">Graphic Design</div>
                <div className="mt-1 f16 fw-600">Aura Branding Design</div>
              </div>
            </div>
            <div className="mt-2">
              <img src="./images/caseStudies3.png" alt="" className="uwqiqxz" />
              <div className="pd-1 mt-1">
                <div className="light-grey">Graphic Design</div>
                <div className="mt-1 f16 fw-600">
                  Gradient Website Development
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./images/caseStudies2.png" alt="" className="uwqiqxz" />
              <div className="pd-1 mt-1">
                <div className="light-grey">Graphic Design</div>
                <div className="mt-1 f16 fw-600">AB.S Snack Packaging</div>
              </div>
            </div>
            <div className="mt-2">
              <img src="./images/caseStudies4.png" alt="" className="uwqiqxz" />
              <div className="pd-1 mt-1">
                <div className="light-grey">Graphic Design</div>
                <div className="mt-1 f16 fw-600">Magazine Content Writing</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex g1 align-item-center justify-content-center mt-5">
          <div className="blue fw-600 c-pointer">See all works</div>
          <img
            src="./images/rightArrowBlue.svg"
            className="uquwdyvxcatw"
            alt=""
          />
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="xwegiyqwgef">
        <div className="mt-5 kxiwy8fw">
          <div className="flex justify-content-center">
            <div className="text-align-center">
              <div className="green f10 fw-700 mt-4">TESTIMONIAL</div>
              <div className="fcweugf white f22 mt-1 fw-700">
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users.”
              </div>
              <img
                src="./images/digitalMarketerImg.png"
                alt=""
                className="mt-2 ayewxcqas"
              />
              <div className="white fw-700 f16 mt-1">Ian Klein</div>
              <div className="light-grey f10">Digital Marketer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home