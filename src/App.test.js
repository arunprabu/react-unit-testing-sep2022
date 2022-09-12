// Testing Pattern: AAA (Arrange, Act, Assert)
// Arrange 
import { render, screen } from '@testing-library/react'; // importing the tools
import App from './App'; // importing the comp for testing

// group of related test specs -- TEST SUITE
describe('AppComponent', () => { 

  // test spec -- Requirement
  test('should have "Success" text', () => {
    // Act
    render(<App />);
    const successTxtEl = screen.getByText('Success');

    // Assert is must for evey test spec 
    expect(successTxtEl).toBeInTheDocument();
  });

  // 'it' is an alias of test
  it(`should have 'Welcome to Unit Testing with Jest, RTL and Enzyme'`, () => {

    render(<App />);
    const appNameEl = screen.getByText(/Welcome to Unit Testing with Jest, RTL and Enzyme/i);
    
    // expect is from jest | toBeInTheDocument is from @testing-library/jest-dom
    expect(appNameEl).toBeInTheDocument();
  });

})


// findAllBy and findBy
// getAllBy and getBy
// queryAllBy and queryBy

