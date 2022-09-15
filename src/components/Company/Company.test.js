// Arrange
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Company from "./Company";

// TEST SUITE
describe('CompanyComponent', () => {

  // test spec #1
  it('has the company name Cognizant', () => {
    render(<Company />);
    const companyNamEl = screen.getByTestId('companyNameEl');

    expect(companyNamEl.textContent)
      .toBe(`Cognizant's Official Website!`);
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
    expect(screen.getByText('Head over to Cognizant Australia website!')).toBeInTheDocument();

    fireEvent.change(countryInput, {
      target: {
        value: 'UK'
      }
    });
    expect(countryInput.value).toBe('UK');
    expect(screen.getByText('Head over to Cognizant UK website!')).toBeInTheDocument();
  });

  // testing inline css 
  it('has css style with bg color green', () => {
    render(<Company />);
    expect(screen.getByTestId('successNotification')).toHaveStyle('background-color: #00ff00' );
  });

  // TODO: testing element with css class 'btn-danger' 

  // snapshot testing
  it('should have right company comp snapshot', () => {
    // npm i react-test-renderer 
    // we will take a snapshot in json format
    const snapshotJSON = renderer.create(<Company name='Cognizant Technology Solutions Corporation'/> );
    // lets assert
    expect(snapshotJSON).toMatchSnapshot();
  });



});

