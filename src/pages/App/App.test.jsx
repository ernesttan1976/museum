import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders header logo and menu', () => {
    render(
    <Router><App /></Router>
      );
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    const menuButton = screen.getByLabelText('menu');
    expect(menuButton).toBeInTheDocument();
  });

  test('navigates to home page when logo is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const logo = screen.getByAltText('logo');
    userEvent.click(logo);
    expect(history.location.pathname).toBe('/');
  });

  test('navigates to login form when login button is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const loginButton = screen.getByLabelText('login');
    userEvent.click(loginButton);
    expect(history.location.pathname).toBe('/users/login');
  });

  test('navigates to signup form when signup button is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const signupButton = screen.getByLabelText('signup');
    userEvent.click(signupButton);
    expect(history.location.pathname).toBe('/users/signup');
  });

  test('navigates to exhibitions page when exhibitions button is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const exhibitionsButton = screen.getByLabelText('exhibitions');
    userEvent.click(exhibitionsButton);
    expect(history.location.pathname).toBe('/exhibitions');
  });

  test('navigates to artworks page when artworks button is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const artworksButton = screen.getByLabelText('artworks');
    userEvent.click(artworksButton);
    expect(history.location.pathname).toBe('/artworks');
  });

  test('navigates to map page when map button is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const mapButton = screen.getByLabelText('map');
    userEvent.click(mapButton);
    expect(history.location.pathname).toBe('/map');
  });

  test('navigates to experimental page when experimental button is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const experimentalButton = screen.getByLabelText('experimental');
    userEvent.click(experimentalButton);
    expect(history.location.pathname).toBe('/experimental');
  });

  test('navigates to the login page when logout button is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const logoutButton = screen.getByLabelText('logout');
    userEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/users/logout');
  });
});