import { render, screen, waitFor } from "@testing-library/react";
import Users from "./Users";
import { fetchAPI } from '../../Utils/fetchAPI';

// preparing to mock fetch api 
jest.mock('../../Utils/fetchAPI');

describe('UsersComponent', () => {

  it('renders the users comp with rest api data [MOCKING]', async() => {
    // here's the mock data
    // as the n/w call will get data after sometime, it should have async await.
    // instead we can mock. test the comp with the mock data upon api request
    // mocking successful api call 
    const userList = [{
        id: 1,
        name: 'Virat Kohli'
      },
      {
        id: 2,
        name: 'Steve Smith'
      }
    ];

    // resolving with the successful res
    fetchAPI.mockResolvedValue(userList)
    
    render(<Users />);
    await waitFor( ( ) => {
      expect(screen.getByText(/Virat Kohli/i)).toBeInTheDocument();
    })
  })

  it('renders error in comp properly with API data [MOCKING]', async() => {
    fetchAPI.mockRejectedValue(new Error('error occured'));
    render(<Users />);
    await waitFor( ( ) => {
      expect(screen.getByText(/Sorry! Some error occurd! pls try again/i)).toBeInTheDocument();
    })
  })
});
  