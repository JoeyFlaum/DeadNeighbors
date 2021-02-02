import React from 'react';

const ArticlePhotoLinkCard =({photo_url, web_url})=>{
    return(
        <img alt = "New York Times Multimedia" src={`https://www.nytimes.com/${photo_url}`}/>
    )
}

export default ArticlePhotoLinkCard;