import React from 'react';
import Game from './Game';
import { screen, render } from '../../utils/test.utilis';

describe('Given a Game page', () => {
  test('Should render Game Menu', () => {
    render(
      <Game />,
    );
    expect(screen.queryByText(/Game Menu/i)).toBeInTheDocument();
  });
});
