import React from "react";

class Blog extends React.Component {
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
        this.setState((prevState) => ({
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
      <div className="blog">
        <div className="content">
          <div className = "infoCard">
          {covidNews.articles.length!==0?`nytimes.com/${covidNews.articles[0].multimedia[0].url}`:'Loading...'}
        </div>
          <p>
            Esse eu enim <a href="www.deadneighbors.com">lorem</a> incididunt ea
            anim nostrud elit ut qui aliquip officia proident
            cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse eu enim
            incididunt ea anim nostrud elit ut qui aliquip officia proident
            cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse eu enim
            incididunt ea anim nostrud elit ut qui aliquip officia proident
            cupidatat.Cupidatat cillum occaecat deserunt aliqua.
          </p>
          <p>
            Esse eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse
            eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse
            eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua.
          </p>
        </div>
        <div className="content">
          <h2>Blog 2 MM-DD-YYYY</h2>
          <p>
            Esse eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse
            eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse
            eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua.
          </p>
          <p>
            Esse eu enim <a href="www.deadneighbors.com">lorem</a> incididunt ea
            anim nostrud elit ut qui aliquip officia proident
            cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse eu enim
            incididunt ea anim nostrud elit ut qui aliquip officia proident
            cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse eu enim
            incididunt ea anim nostrud elit ut qui aliquip officia proident
            cupidatat.Cupidatat cillum occaecat deserunt aliqua.
          </p>
          <p>
            Esse eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse
            eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua. Esse
            eu enim incididunt ea anim nostrud elit ut qui aliquip officia
            proident cupidatat.Cupidatat cillum occaecat deserunt aliqua.
          </p>
        </div>
      </div>
    );
  }
}

export default Blog;
