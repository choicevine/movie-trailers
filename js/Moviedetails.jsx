// @flow

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

type Props = show;

class Details extends Component<props> {
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
      ratingData = () => <h3> loading...</h3>;
    }

    return (
      <div className="details">
        <Header />

        <section>
          <h1>{this.props.title}</h1>
          <h2>{this.props.year}</h2>
          {ratingData}
          <img alt={`${this.props.title} show poster`} src={`/public/img/posters/${props.poster}`} />
          <p>{this.props.description}</p>
        </section>

        <div>
          <iframe
            src={`http://www.youtube-nocookie.com/embed/${this.props.trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
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
