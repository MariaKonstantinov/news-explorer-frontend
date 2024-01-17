import "./About.css";
import authorImage from "../../images/author_image.png";

const About = () => {
  return (
    <section className="about">
      <div className="about__overlay">
        <img className="about__author" alt="Author" src={authorImage} />
        <div className="about__content-overlay">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Maria is a full-stack web developer. She possesses hands-on
            experience in building modern web solutions, managing server
            databases, and utilizing technologies such as the M.E.R.N stack
            (MongoDB, Express.js, React, Node.js).
          </p>
          <p className="about__description">
            After successfully completing the TripleTen web development program,
            Maria emerged as a proficient graduate equipped with the latest
            technologies in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
