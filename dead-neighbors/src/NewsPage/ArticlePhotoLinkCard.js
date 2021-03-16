import React from "react";

const ArticlePhotoLinkCard = ({ photo_url }) => {
  return (
    <img
      alt="New York Times Multimedia"
      src={
        photo_url !== "/static/media/NO_IMAGE.1e6aa083.jpg"
          ? `https://www.nytimes.com/${photo_url}`
          : photo_url
      }
    />
  );
};

export default ArticlePhotoLinkCard;
