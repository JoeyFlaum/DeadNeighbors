import React from "react";
import Articles from './Articles';

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      covidNews: { articles: [] },
    };
  }

  componentDidMount() {
    fetch(
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&fq=section_name:("Health" "Science")&sort=newest&page=0&api-key=ZLmA1qfbE90PPDHY2VitTuzeLso1Mgb0'
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => ({
          covidNews: {
            articles: data.response.docs,
          },
        }))
      );
  }

  render() {
    let covidNews = this.state.covidNews;
    console.log("news", covidNews.articles.length!==0?covidNews.articles[0].multimedia[0].url:'blah');
    return (
      <div className="news-wrapper">
        <div className="content">
        <Articles/>
        </div>
      </div>
    );
  }
}

export default News;
