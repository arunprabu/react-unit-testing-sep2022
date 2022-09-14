// Arrange
import { fireEvent, render, screen } from "@testing-library/react";
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

  // test spec #3
  // checking if an input element with 'Enter Country' as placeholder found or not 
  it(`has an input element with 'Enter Country' as placeholder`, () => {
    render(<Company />);
    const countryInput = screen.getByPlaceholderText('Enter Country');
    expect(countryInput).toBeTruthy();
  });

  // test spec #4 
  it('should update country onChange event', ()=> {
    render(<Company />);
    // let's find the input element that has onChange handler
    const countryInput = screen.getByPlaceholderText('Enter Country');
    
    // now checking if onChange event is working well or not
    // mock fire the onChange event with mock value
  
    fireEvent.change(countryInput, {
      target: {
        value: 'Australia'
      }
    });
    expect(countryInput.value).toBe('Australia');

    fireEvent.change(countryInput, {
      target: {
        value: 'UK'
      }
    });
    expect(countryInput.value).toBe('UK');
  });

});

