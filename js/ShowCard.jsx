// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 32%;
	border: 2px solid #333
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

type Props = {
  title: string,
  description: string,
  year: string,
  poster: string
};

const ShowCard = (props: Props) => (
  <Wrapper className="show-card">
    <img alt={`${props.title} show poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);
export default ShowCard;
