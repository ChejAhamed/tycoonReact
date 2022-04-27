import React from 'react';
import Header from './Header';
import { screen, render } from '../utils/test.utilis';

describe('Given a Header component', () => {
  test('Should render Tycoon', () => {
    render(
      <Header />,
    );
    expect(screen.queryByText(/Tycoon/i)).toBeInTheDocument();
  });
});
