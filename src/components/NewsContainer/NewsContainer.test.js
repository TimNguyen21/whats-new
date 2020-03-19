import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NewsContainer from './NewsContainer';

describe("NewsContainer", () => {
  it("should create News Article in the News Container", () => {
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

    const { getByText } = render(<NewsContainer
        newsData={newsSample}
      />);

    const headlineElement1 = getByText("Spider-Man Will Remain ...");
    const headlineElement2 = getByText("Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker ...");
    const descriptionElement1 = getByText("The web slinger will be the only superhero ...");
    const descriptionElement2 = getByText("While the larger conversation around Todd Phillips ...");

    expect(headlineElement1).toBeInTheDocument()
    expect(headlineElement2).toBeInTheDocument()
    expect(descriptionElement1).toBeInTheDocument()
    expect(descriptionElement2).toBeInTheDocument()
  })

})
