// @flow

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

type Props = Show;

class Details extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      apiData: { rating: '' }
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.imdbID}`).then((response: { data: { rating: string } }) => {
      this.setState({ apiData: response.data });
    });
  }

  render() {
    let ratingData;

    if (this.state.apiData.rating) {
      ratingData = <h3>{this.state.apiData.rating}</h3>;
    } else {
      ratingData = <img src="/public/img/loading.gif" alt="" />;
    }

    return (
      <div className="details">
        <Header searchInput />
        <section>
          <h1>{this.props.title}</h1>
          {ratingData}
          <h2>{this.props.year}</h2>
          <img alt={`${this.props.title} show poster`} src={`/public/img/posters/${this.props.poster}`} />
          <p>{this.props.description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${this.props.trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${this.props.title}`}
          />
        </div>
      </div>
    );
  }
}

export default Details;
