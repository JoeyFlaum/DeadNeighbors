import React from "react";
import Articles from "./Articles";
import DeadPeople from "../HomePage/DeadPeople";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      covidNews: { articles: [] },
    };
  }

  componentDidMount() {
    //Fetch New York Times Articles related to covid, custom query
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
    return (
      <div className="news-wrapper">
        <DeadPeople /* show dead people count since visit */
          deadPersonCount={this.props.deadPerson}
          key={
            this.props.deadPerson
          } /*key change forces render(updated props are sent)*/
        />
        {covidNews.articles.length !== 0 ? (
          <Articles data={covidNews.articles} />/* article layout */
        ) : (
          "Loading News..."
        )}
      </div>
    );
  }
}

export default News;
