import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNav: false,
      showMobileList: false,
    };
    this.resize = this.resize.bind(this);
    this.hamburgerHandler = this.hamburgerHandler.bind(this);
  }
  componentDidMount() {
    window.addEventListener(
      "resize",
      this.resize
    ); /*listen for window resizing */
    this.resize();
  }
  resize() {
    let currentmobileNav =
      window.innerWidth <= 1315; /*checks width of window, returns boolean */
    if (currentmobileNav !== this.state.mobileNav) {
      this.setState({
        mobileNav: currentmobileNav,
        showMobileList: false,
      }); /*sets mobile or desktop view and closes menu if transitioning to desktop view */
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize); /*prevent memory leaks */
  }
  hamburgerHandler() {
    this.state.showMobileList /*closes nav menu on link click */
      ? this.setState({ showMobileList: false })
      : this.setState({ showMobileList: true });
  }

  render() {
    const { mobileNav, showMobileList } = this.state;
    const hamburgerHandler = this.hamburgerHandler;
    const linkText = ["Home", "News", "Resources", "About", "US Covid Info"];
    const links = ["/", "/news", "/resources", "/about", "/info"];
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
              className={showMobileList ? "hamburger x" : "hamburger menu"}/*shows x or hamburger */
              onClick={hamburgerHandler}
            ></button>
            <ul className={showMobileList ? "navbar show" : "navbar hide"}> {/*show/hide navigation menu*/}
            {linkText.map((text, i) => {/*map links for movbile view */
                return (
                  <Link to={links[i]} className = "links mobile">
                    <li  onClick={hamburgerHandler}>{text}</li>
                  </Link>
                );
              })}          
            </ul>
          </nav>
        ) : (
          <nav className="headerNav"> 
            <ul>
              {linkText.map((text, i) => {/*map links for desktop*/
                return (
                  <Link to={links[i]} className = "links desktop">
                    <li >{text}</li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

export default Header;
