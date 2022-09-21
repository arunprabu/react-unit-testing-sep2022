import { render, screen } from "@testing-library/react";
import mockFetch from "./mockFetch";
import Posts from "./Posts";

describe('PostsComponent', () => {

  // setting up 
  beforeEach( () => {
    // working on to setup spy
    jest.spyOn(window, 'fetch').mockImplementation( mockFetch )
  })

  // tearing down
  afterEach( () => {
    jest.resetAllMocks(); // make window obj to have original fetch method again
  });

  it('renders posts with mock data [SPY]', async() => {
    render(<Posts />);

    expect(await screen.findByText(/first post/)).toBeInTheDocument();
    expect(await screen.findByText(/second post/)).toBeInTheDocument();
  });

});
