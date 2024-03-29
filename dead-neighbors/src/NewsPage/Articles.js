import React from "react";
import ArticleTitleCard from "./ArticleTitleCard";
import ArticlePhotoLinkCard from "./ArticlePhotoLinkCard";
import noImage from '../Images/NO_IMAGE.jpg'

const Articles = ({ data }) => {
  return (
    <>
      {data.map((info, i) => {/* map each article card  */
        const flexClass = "single-article-wrapper";
        const flexClassReverse = "single-article-wrapper reverse";
        return (
          <div key={i} className={i % 2 === 0 ? flexClass : flexClassReverse}/* every other result is displayed flipped horizontally */>
            
            <div className="article-info">
              <ArticleTitleCard /* display article snippet*/
                key={info?.keywords[0]?.value || i}
                source={info.source}
                headlineMain={info.headline.main}
                leadParagraph={info.lead_paragraph}
              />
            </div>
            <div className="infoCard">
              <ArticlePhotoLinkCard /* display photo from article */
                key={info?.keywords[0]?.value || i}
                photo_url={info.multimedia[0] !== undefined?info.multimedia[0].url:noImage}
              />
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href={info.web_url}
              >
                <button>
                  <div className="click-me">Full Article</div> {/* link to article */}
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Articles;
