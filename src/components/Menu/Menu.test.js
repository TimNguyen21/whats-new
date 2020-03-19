import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Menu from './Menu';

describe("Menu", () => {
  let entertainment, local, articleTopics, currentFilterNews;

  beforeEach(() => {
    entertainment = [
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
    ];

    local = [
      {
        id: 1,
        headline: 'Hit and run ...',
        img: 'https://static01.nyt.com/images/...',
        description: 'Victim in critcal condition ...',
        url: 'https://www.nytimes.com/...'
      },
      {
        id: 2,
        headline: 'Corona Crisis ...',
        img: 'https://i.kinja-img.com/...',
        description: 'The number of people getting virus ...',
        url: 'https://io9.gizmodo.com/...'
      }
    ];

    articleTopics = [
      {title: "Local", data: local},
      {title: "Entertainment", data: entertainment},
    ];

    currentFilterNews = jest.fn();

  });

  it("should display Local article based on Local Button clicked", () => {
    const { getByText } = render(<Menu
        articleTopics={articleTopics}
        currentNewsType={currentFilterNews}
        />);

    const localButton = getByText("Local");

    fireEvent.click(localButton);

    expect(currentFilterNews).toHaveBeenCalledWith([
      {
        id: 1,
        headline: 'Hit and run ...',
        img: 'https://static01.nyt.com/images/...',
        description: 'Victim in critcal condition ...',
        url: 'https://www.nytimes.com/...'
      },
      {
        id: 2,
        headline: 'Corona Crisis ...',
        img: 'https://i.kinja-img.com/...',
        description: 'The number of people getting virus ...',
        url: 'https://io9.gizmodo.com/...'
      }
    ]);
  })

  it("should display Local article based on Local Button clicked", () => {
    const { getByText } = render(<Menu
        articleTopics={articleTopics}
        currentNewsType={currentFilterNews}
    />);

    const entertainmentButton = getByText("Entertainment");

    fireEvent.click(entertainmentButton);

    expect(currentFilterNews).toHaveBeenCalledWith([
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
    ]);
  })

})
