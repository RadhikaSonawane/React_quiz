import React from 'react';
//import { render } from '@testing-library/react';
import ReactDom from "react-dom";
import App from './App';
import Questions from "./component/Questions"

/**test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});**/

it("Rendering without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<App></App>, div);
  ReactDom.unmountComponentAtNode(div);
});

test("Rendering Questions page", () => {
  const div = document.createElement("div");
  ReactDom.render(<Questions/>, div);
  ReactDom.unmountComponentAtNode(div);
});



