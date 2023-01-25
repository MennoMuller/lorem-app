import React from "react";

class WebsiteQuote extends React.Component {
  state = {
    quote: {
      quote: "This is a random quote",
      author: "Random Author"
    }
  };

  componentDidMount() {
    fetch("https://quotes.rest/qod?language=en")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ quote: data.contents.quotes[0] })
      )
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="grid-item item-c blue">
        <h2>Random quote of the day</h2>
        <h3 className="quote">
          "{this.state.quote.quote}"
        </h3>
        <p className="quote-author">
          -{this.state.quote.author}
        </p>
        <span className="tss-span">
          <img
            src="https://theysaidso.com/branding/theysaidso.png"
            height="10"
            width="10"
            alt="theysaidso.com"
          />
          <a
            href="https://theysaidso.com"
            title="Powered by quotes from theysaidso.com"
            className="tss-a"
          >
            They Said So®
          </a>
        </span>
      </div>
    );
  }
}

export default WebsiteQuote;
