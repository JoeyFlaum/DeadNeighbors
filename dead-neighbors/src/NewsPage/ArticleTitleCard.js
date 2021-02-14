import React from 'react';

const ArticleTitleCard =({source,headlineMain,leadParagraph})=>{
    return(
        <div className = "article-title">
            <h1>{source} Article</h1>
            <h3>{headlineMain}</h3>
            <p>{leadParagraph}</p>
        </div>
    )
}

export default ArticleTitleCard;