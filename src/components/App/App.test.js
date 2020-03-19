import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('can display Local news based on Local button clicked', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const localButton = getByText("Local");

    fireEvent.click(localButton);

    expect(getByText("The Who postpones Denver Concert at the Pepsi Center"))
      .toBeInTheDocument();
    expect(getByText("Car2Go leaving Denver amid company shake-up"))
      .toBeInTheDocument();
  });

  it('can display Health news based on Health button clicked', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const healthButton = getByText("Health");

    fireEvent.click(healthButton);

    expect(getByText("Human case of West Nile Virus reported in Bay County"))
      .toBeInTheDocument();
    expect(getByText("Babies Drank from Ancient Sippy Cups Thousands of Years Ago"))
      .toBeInTheDocument();
  });

  it('can display Entertainment news based on Entertainment button clicked', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const entertainmentButton = getByText("Entertainment");

    fireEvent.click(entertainmentButton);

    expect(getByText("The final season of BoJack Horseman starts October 25th"))
      .toBeInTheDocument();
    expect(getByText("Spider-Man Will Remain in the Marvel Cinematic Universe"))
      .toBeInTheDocument();
  });

  it('can display Science news based on Science button clicked', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const scienceButton = getByText("Science");

    fireEvent.click(scienceButton);

    expect(getByText("India's Lost Moon Lander Is Somewhere in This Photo"))
      .toBeInTheDocument();
    expect(getByText("NASA, in Reddit AMA, says Earth probably won't be eaten by a black hole"))
      .toBeInTheDocument();
  });

  it('can display Technology news based on Technology button clicked', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const technologyButton = getByText("Technology");

    fireEvent.click(technologyButton);

    expect(getByText("Unfixable iOS Device Exploit Is the Latest Apple Security Upheaval"))
      .toBeInTheDocument();
    expect(getByText("Download the updated Pixel Launcher from the Pixel 4"))
      .toBeInTheDocument();
  });
  
});
