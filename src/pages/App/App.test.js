import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App.js main app page',()=>{

  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('renders 3 list items', () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
  })
  
  it('renders title', () => {
    render(<App />);
    const title = screen.getByTestId("mytestid");
    expect(title).toBeInTheDocument();
  })
  
  it('sum should be 5', () => {
    render(<App />);
    const sum = screen.getByTitle("sum");
    expect(sum.textContent).toBe("5");
  })

})

