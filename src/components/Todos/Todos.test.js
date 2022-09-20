import { render, screen, waitFor } from "@testing-library/react";
import Todos from "./Todos";

describe('TodosComponent', () => {
  
  // Testing the REST API Call
  it('fetches todos via REST API Call [1]', async() => {
    render(<Todos />);
    expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
  });

  // another option
  it('fetches todos via REST API Call [2]', async() => {
    render(<Todos />);
    await waitFor( () => {
      expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
    })
  });

  /* Challenges / Disadv of API Testing  
    1. Time Consuming
    2. Availability of the REST API is a concern (may be in dev, may be down)
    3. No guarantee for the sample data like this 'delectus aut autem' 

    So, the above approaches are NOT RECOMMENDED
  */

  
});