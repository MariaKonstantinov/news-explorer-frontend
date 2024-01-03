import React from "react";
import "./NotFoundResults.css";
import NotFoundImage from "../../images/icons/not-found_icon.svg";

const NotFoundResults = () => {
  return (
    <section className="not-found">
      <div className="not-found__overlay">
        <img
          className="not-found__image"
          src={NotFoundImage}
          alt="A sad face"
        />
        <h3 className="not-found__title">Nothing found</h3>
        <p className="not-found__description">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
};

export default NotFoundResults;
