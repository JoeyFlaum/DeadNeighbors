import React from 'react';

const ArticlePhotoLinkCard =({photo_url, web_url})=>{
    return(
        <img alt = "" src={`https://www.nytimes.com/${photo_url}`}/>
    )
}

export default ArticlePhotoLinkCard;