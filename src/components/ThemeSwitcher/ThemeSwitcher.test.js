import { shallow } from "enzyme"; // for shallow rendering
import ThemeSwitcher from "./ThemeSwitcher";


describe('ThemeSwitcher', () => {
  
  it('should have para tag', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('p')).toBeTruthy();
    expect(wrapper.find('p').text()).toBe('Current Theme: light');
  });

  it('should have div with only one h2 as inner element', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('has button which switches theme on click', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('p').text()).toBe('Current Theme: light');
    
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toBe('Current Theme: dark');

  });

  it('has no error displayed by default', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.containsMatchingElement(<div className='alert alert-danger'>Some error occured</div>)).toBeFalsy();
  })
});

