import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Josimar Rocha</p>
    </Hero>
  );

  expect(getByText("Josimar Rocha")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  const cssValue = "url(http://test/image.jpg),rgba(0,0,0,0.4)";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule("background", cssValue);
});
