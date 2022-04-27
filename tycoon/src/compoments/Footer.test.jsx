import React from 'react';
import Footer from './Footer';
import { screen, render } from '../utils/test.utilis';

describe('Given a Footer component', () => {
  test('Should render Team', () => {
    render(
      <Footer />,
    );
    expect(screen.queryByText(/Team/i)).toBeInTheDocument();
  });
});
