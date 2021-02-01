import React from "react";
import ArticleTitleCard from "./ArticleTitleCard";
import ArticlePhotoLinkCard from "./ArticlePhotoLinkCard";

const Articles = ({ data }) => {
  return (
    <>
      {data.map((info, i) => {
        console.log("info", info.multimedia[0].url);
        const flexClass = "single-article-wrapper";
        const flexClassReverse = "single-article-wrapper reverse";
        return (
          <div key={i} className={i % 2 === 0 ? flexClass : flexClassReverse}>
            <div className="article-info">
              <ArticleTitleCard
                key={info.keywords[0].value}
                source={info.source}
                headlineMain={info.headline.main}
                leadParagraph={info.lead_paragraph}
              />
            </div>
            <div className="infoCard">
              <ArticlePhotoLinkCard
                key={info.keywords[1].value}
                photo_url={info.multimedia[0].url}
              />
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href={info.web_url}
              >
                <button><div className = "click-me">Full Article</div></button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Articles;
