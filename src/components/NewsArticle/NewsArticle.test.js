import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NewsArticle from './NewsArticle';

describe("NewsArticle", () => {
  it("should display the news article information", () => {
    const { getByText } = render(<NewsArticle
        id={5}
        img={"http://article.img"}
        headline={"Housing Market Crash?"}
        description={"Statics shows that there will be a housng market Crash based ..."}
        url={"http://article.com"}
      />);

      const headlineElement = getByText("Housing Market Crash?");
      const descriptionElement = getByText("Statics shows that there will be a housng market Crash based ...");

      expect(headlineElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();

  })

})
