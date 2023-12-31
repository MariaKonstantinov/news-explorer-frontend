import React, { useState } from "react";
import "./NewsCard.css";

const NewsCard = ({ data, onSavedArticlesPage, loggedIn }) => {
  const [isSaved, setIsSaved] = useState(false);

  function handleSave() {
    setIsSaved(!isSaved);
  }

  return (
    <div className="news-card">
      <img className="news-card__image" src={data.image} alt={data.alt} />
      {!onSavedArticlesPage && (
        <>
          <button
            className={`news-card__button news-card__button_save ${
              loggedIn && isSaved ? "news-card__button_save_active" : ""
            }`}
            onClick={handleSave}
          ></button>
          {!loggedIn && (
            <div className="news-card__tag news-card__tag_type_tooltip">
              Sign in to save articles
            </div>
          )}
        </>
      )}
      {onSavedArticlesPage && (
        <>
          <button className="news-card__button news-card__button_remove"></button>
          <div className="news-card__tag news-card__tag_type_keyword">
            {data.keyword}
          </div>
        </>
      )}
      <div className="news-card__details">
        <p className="news-card__date">{data.date}</p>
        <h2 className="news-card__title">{data.title}</h2>
        <p className="news-card__description">{data.description}</p>
        <p className="news-card__source">{data.source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
