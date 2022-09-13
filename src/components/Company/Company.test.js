// Arrange
import { render, screen } from "@testing-library/react";
import Company from "./Company";

// TEST SUITE
describe('CompanyComponent', () => {

  // test spec #1
  it('has the company name Cognizant', () => {
    render(<Company />);
    const companyNamEl = screen.getByTestId('companyNameEl');

    expect(companyNamEl.textContent)
      .toBe(`Cognizant's Official Website`);
  });

  // test spec #2 -- let's test the props
  it('receive props and displays them properly', () => {
    render(<Company name='Cognizant Technology Solutions Corporation'/>);
    
    expect(screen.getByTestId('companyFullName')).toHaveTextContent('Cognizant Technology Solutions Corporation');
    
    
  });


});

