import "./About.css";
import authorImage from "../../images/person_image.png";

const About = () => {
  return (
    <section className="about">
      <div className="about__overlay">
        <img className="about__author" alt="Author" src={authorImage} />
        <div className="about__content-overlay">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Maria is a full-stack web developer. She possesses hands-on
            experience in building both frontend and backend solutions, managing
            server databases, and utilizing technologies such as the M.E.R.N
            stack (MongoDB, Express.js, React, Node.js) as well as working with
            JavaScript and TypeScript.
          </p>
          <p className="about__description">
            As a recent graduate from TripleTen web development program, Maria
            has a competence for creating elegant software solutions utilizing
            the most up-to-date technologies in web development industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
