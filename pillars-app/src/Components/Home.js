import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Css/Home.css";
import "../App.css";
import myImage from "../images/img3.jpg";
import { FaPhone } from "react-icons/fa";
import Loader from "./Loader";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTigger from "react-scroll-trigger";
import { Parallax } from "react-parallax";
import quranRes from "../images/QurRec.jpg";
import quranLes from "../images/QurLes.png";
import IslamicLes from "../images/IslamicLes.jpg";
import CourseDetails from "./CourseDetails";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Footer from "./Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [counteOn, setCounterOn] = useState(false);
  const [showSlideBar, setShowSlideBar] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  function handleMouseEnter() {
    setShowSlideBar(true);
  }

  function handleMouseLeave() {
    setShowSlideBar(false);
  }

  function toggleDetails() {
    setShowDetails(!showDetails);
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false);
      }, 500); // Reset the shaking state after 500ms
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className="floating-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="https://wa.me/447756393994">
              <FaPhone size={25} />
            </a>
            <div className={`slide-bar ${showSlideBar ? "show" : ""}`}>
              <p>+44 7756 393994</p>
            </div>
          </div>
          <Navbar />
          <Parallax strength={-600} bgImage={myImage}>
            <div
              className="image-container"
              style={{ height: "100vh", width: "100%" }}
            >
              <div className="overlay">
                <h1>
                  EARN THE QURAN <span>ONLINE </span>
                </h1>
                <h1> ANYWHERE, ANYTIME</h1>
                <hr className="my-hr" />
                <p>
                  BESPOKE ONE TO ONE LESSONS WITH HIGHLY EXPERIENCED AND
                  QUALIFIED TUTORS IN
                </p>
                <p>TAJWEED, RECITATION, HIFZ, AND ISLAMIC STUDIES.</p>

                <div className="btn">
                  <button>
                    Register <FaUserLock />
                  </button>
                  <button>
                    Learn More <FaArrowCircleRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </Parallax>

          <ScrollTigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="count">
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={493} duration={2} delay={0} />
                  )}
                  + <br />
                </h3>
                <p> Registered Student</p>
              </div>
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={76} duration={2} delay={2} />
                  )}
                  + <br />
                </h3>
                <p> Available Tutors</p>
              </div>
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={2763} duration={2} delay={1} />
                  )}
                  + <br />
                </h3>
                <p> Hours Studied</p>
              </div>
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={5} duration={2} delay={3} />
                  )}
                  + <br />
                </h3>
                <p> Countries Served</p>
              </div>
            </div>
          </ScrollTigger>

          <div className="course">
            <div className="course-head">
              <h2>
                5 Pillars Academy is an ideal online solution for learning the
                Quran & enhancing your Islamic knowledge
              </h2>
              <h4>
                We cater to individuals of all ages and levels of learning, and
                our solution is tailored to meet the specific needs and pace of
                each student.
              </h4>
              {/* <button className="arrow" onClick={toggleDetails}>
                {showDetails ? (
                  <FaArrowAltCircleUp size={35} />
                ) : (
                  <FaArrowAltCircleDown size={35} />
                )}
              </button> */}
              <button
                className={`arrow ${isShaking ? "shake-animation" : ""}`}
                onClick={toggleDetails}
              >
                {showDetails ? (
                  <FaArrowAltCircleUp size={35} />
                ) : (
                  <FaArrowAltCircleDown size={35} />
                )}
              </button>
            </div>
            <div className="row">
              {/* <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button> */}
              {showDetails && (
                <>
                  <CourseDetails
                    imageSrc={quranRes}
                    heading="Quran Recitation"
                    text="We have highly qualified tutors who can deliver lessons in Qaida and Quran recitation, working with you to achieve your goals."
                  />
                  <CourseDetails
                    imageSrc={quranLes}
                    heading="Hifdh Lessons"
                    text="Our Hifdh program is ideal for students who wish to memorise the Quran and our Selected Surahs program is for anyone who wants to memorise the important and often recited surahs."
                  />
                  <CourseDetails
                    imageSrc={IslamicLes}
                    heading="Islamic Lessons"
                    text="Our comprehensive curriculum covers areas such as Hadith, Fiqh, Seerah & Islamic History, Aqeedah and contemporary issues."
                    isComingSoon
                  />
                </>
              )}
            </div>
          </div>
          <div className="aboutUs"></div>
          <Footer />
        </>
      )}
    </>
  );
}
export default Home;
