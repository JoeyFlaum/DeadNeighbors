import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNav: false,
      showMobileList: false,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    let currentmobileNav = window.innerWidth <= 1310;
    if (currentmobileNav !== this.state.mobileNav) {
      this.setState({ mobileNav: currentmobileNav, showMobileList:false });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  hamburgerHandler() {
    this.state.showMobileList
      ? this.setState({ showMobileList: false, })
      : this.setState({ showMobileList: true });
  }

  render() {
    console.log("show", this.state.showMobileList);
    const { mobileNav,showMobileList} = this.state;
    const linkStyle = { textDecoration: "none", color: "black" };
    const hamButtonStyleX = {backgroundImage: 'url("https://ljc-dev.github.io/testing0/ham-close.svg")'}
    const hamButtonStyle = {backgroundImage: 'url("https://ljc-dev.github.io/testing0/ham.svg")'}
    return (
      <header>
        <div className="deadTitle">
          <div className="headerTitle">
            <h1>Dead Neighbors</h1>
            <p>
              <em>Bringing humanity to numbers</em>
            </p>
          </div>
        </div>
        {mobileNav ? (
          <nav className="hamburgerNav">
            <button
              className="hamburger"
              style = {showMobileList?hamButtonStyleX:hamButtonStyle}
              onClick={this.hamburgerHandler.bind(this)}
            ></button>
            <ul>
              <Link to="/" style={linkStyle}>
                <li>Home</li>
              </Link>
              <Link to="/blog" style={linkStyle}>
                <li>Blog</li>
              </Link>
              <Link to="/resources" style={linkStyle}>
                <li>Resources</li>
              </Link>
              <Link to="/about" style={linkStyle}>
                <li>About</li>
              </Link>
              <Link to="/info" style={linkStyle}>
                <li>More Details</li>
              </Link>
            </ul>
          </nav>
        ) : (
          <nav className="headerNav">
            <ul>
              <Link to="/" style={linkStyle}>
                <li>Home</li>
              </Link>
              <Link to="/blog" style={linkStyle}>
                <li>Blog</li>
              </Link>
              <Link to="/resources" style={linkStyle}>
                <li>Resources</li>
              </Link>
              <Link to="/about" style={linkStyle}>
                <li>About</li>
              </Link>
              <Link to="/info" style={linkStyle}>
                <li>More Details</li>
              </Link>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

export default Header;
