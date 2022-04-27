import React from 'react';
import Home from './Home';
import { screen, render } from '../../utils/test.utilis';

describe('Given a Trending component', () => {
  test('Should render FREE WORLDWIDE', () => {
    render(
      <Home />,
    );
    expect(screen.queryByText(/This game is made by/i)).toBeInTheDocument();
  });
});
