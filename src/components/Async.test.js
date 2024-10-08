import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // Creating mock function to test the asynchronous code.
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title:'First Post'}]
    })
    render(<Async />);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});
