import { render, screen } from "@testing-library/react"
import { Greeting } from "./Greeting"
import userEvent from "@testing-library/user-event";

describe('Greeting Component', () => { 

  test("renders greeting component", () => {
    // Arrange - set up the test data, test conditions and test environments
    render(<Greeting />);

    // Act - Run logic that should be tested.
    // nothing...

    // Assert - compare execution results with expected results.
    const helloWorldEle = screen.getByText("Hello world!");
    expect(helloWorldEle).toBeInTheDocument();
  });

  test('Change text button not clicked', () => {
    render(<Greeting />);
    const textNode = screen.getByText("It's good to see you!");
    expect(textNode).toBeInTheDocument();
  });

  test('Change text button clicked', () => {
    render(<Greeting />);
    const changeButton = screen.getByText("Change Text!");
    // changeButton.click();
    userEvent.click(changeButton);

    const textNode = screen.getByText("Changed!");
    expect(textNode).toBeInTheDocument();
  })

  test('Should not render good to see you text if button is clicked', () => {
    render(<Greeting />);

    const changeButton = screen.getByRole("button");
    userEvent.click(changeButton);

   const textNode = screen.queryByText("It's good to see you!");
   expect(textNode).toBeNull();
  })
 })

