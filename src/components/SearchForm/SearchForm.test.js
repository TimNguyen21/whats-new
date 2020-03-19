import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import SearchForm from './SearchForm';

describe("SearchForm", () => {
  it("should filter article based on search word", () => {
    const newsSample = [
      {
        id: 1,
        headline: 'Spider-Man Will Remain ...',
        img: 'https://static01.nyt.com/images/...',
        description: 'The web slinger will be the only superhero ...',
        url: 'https://www.nytimes.com/...'
      },
      {
        id: 2,
        headline: 'Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker ...',
        img: 'https://i.kinja-img.com/...',
        description: 'While the larger conversation around Todd Phillips ...',
        url: 'https://io9.gizmodo.com/...'
      }
    ]

    const currentFilterNews = jest.fn();

    const { getByText, getByPlaceholderText } = render(<SearchForm
        currentTopic={newsSample}
        filterTopic={currentFilterNews}
      />);

    fireEvent.change(getByPlaceholderText("Search Article"), {target: {value: "Spider"}})
    fireEvent.click(getByText("Search"));

    expect(currentFilterNews).toHaveBeenCalledWith([{
      id: 1,
      headline: 'Spider-Man Will Remain ...',
      img: 'https://static01.nyt.com/images/...',
      description: 'The web slinger will be the only superhero ...',
      url: 'https://www.nytimes.com/...'
    }]);
  })

})
