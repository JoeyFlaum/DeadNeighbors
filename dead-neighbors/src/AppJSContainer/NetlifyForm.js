import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class NetlifyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", reason: "Suggestion" };
  }
  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Great Job! Thanks for the input!"))
      .then(this.props.closeForm)
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, reason } = this.state;
    return (
      <div className="netlify-form-wrapper">
        <form name="contact" onSubmit={this.handleSubmit}>
          <h2>Contact Dead Neighbors</h2>
          <p>
            Your Name:
            <label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </label>
          </p>
          <p>
            Your Email:
            <label>
              {" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </label>
          </p>
          <p>
            Reason For Submission:
            <label>
              <select name="reason" value ={reason} onChange={this.handleChange}>
                <option value="Suggestion">
                  Suggestion
                </option>
                <option value="Issue">
                  Issue
                </option>
                <option value="Contact/General">
                  Contact / General
                </option>
              </select>
            </label>
          </p>
          <p className="form-message">
            Message:
            <label>
              <textarea
                name="message"
                maxLength="300"
                rows="10"
                value={message}
                onChange={this.handleChange}
                required
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
        <button className="form-cancel" onClick={this.props.closeForm}>
          Cancel
        </button>
      </div>
    );
  }
}
export default NetlifyForm;
