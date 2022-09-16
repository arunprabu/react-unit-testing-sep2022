import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('CounterComponent', () => {
  
  it(`has initial counter value '0'`, () => {
    render(<Counter />);
    const counterValueEl = screen.getByTestId('counterValue');
    expect(counterValueEl.textContent).toBe('0');
  });

  it('has proper increment and decrement feature', () => {
    render(<Counter />);
    const counterValueEl = screen.getByTestId('counterValue');

    // get the increment & decrement btn 
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    // before inc, dec -- checking the default counter value is 0 or not
    expect(counterValueEl.textContent).toBe('0');
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValueEl.textContent).toBe('2');

    fireEvent.click(decrementBtn);
    expect(counterValueEl.textContent).toBe('1');

    fireEvent.click(decrementBtn);
    expect(counterValueEl.textContent).toBe('0');

    for(var i = 0; i < 11; i++){
      fireEvent.click(incrementBtn); // triggering inc for 11 times
    }
    // even after triggering it for the 11th time also it should be the max value 10
    // because we have condition in inc handler
    expect(counterValueEl.textContent).toBe('10'); // because we have condition in inc handler
  });



});