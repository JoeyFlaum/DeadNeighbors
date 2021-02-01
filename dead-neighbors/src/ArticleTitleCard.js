import React from 'react';

const ArticleTitleCard =({source,headlineMain,leadParagraph})=>{
    return(
        <div>
            <h1>{source}</h1>
            <h3>{headlineMain}</h3>
            <p>{leadParagraph}</p>
        </div>
    )
}

export default ArticleTitleCard;