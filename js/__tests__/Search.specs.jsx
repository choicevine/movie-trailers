import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter } from 'react-router';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../Search';
import Header from '../Header';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

Enzyme.configure({ adapter: new Adapter() });

test('Search renders correctly', () => {
  const data = [{ imdbID: 'abc', title: 'billion' }, { imdbID: 'ayuc', title: 'shepeteri' }];

  const component = shallow(<Search preload={data} />);

  expect(component).toMatchSnapshot();
});

test('Search Should render correct amount of Showcard Components', () => {
  const data = [{ imdbID: 'abc', title: 'billion' }, { imdbID: 'ayuc', title: 'shepeteri' }];

  const component = shallow(<Search preload={data} />);

  expect(data.length).toEqual(component.find(ShowCard).length);
});

test('Should render correct amount of ShowCard component for search field ', () => {
  const searchWord = 'black';
  const component = shallow(<Search preload={preload.shows} />);
  const headerComponent = shallow(<Header searchInput />);

  headerComponent.find('input').simulate('change', { target: { value: searchWord } });

  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase() >= 0)
  );

  expect(showCount.length).toEqual(component.find(ShowCard).length);
});
