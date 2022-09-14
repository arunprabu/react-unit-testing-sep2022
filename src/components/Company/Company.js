import React, { useState } from 'react'

const Company = ( {name} ) => {

  console.log('Program Started');

  const [country, setCountry] = useState('Canada');

  const handleCountryChange = (event) => {
    console.log(event); // event obj 
    console.log(event.target.value);
    setCountry(event.target.value);
  }

  return (
    <div>
      <h2>Company | Testing Props, Event, States, Hooks, JSX, CSS styles and Snapshot</h2>
      <h3 data-testid="companyNameEl">
        Cognizant's Official Website
      </h3>

      <h4>
        Company Name: 
        <p data-testid="companyFullName">{name}</p>
      </h4>

      <br />
      <label>Enter your Country: </label>
      {/* working with onChange event */}
      <input type='text' value={country} 
        onChange={handleCountryChange}
        placeholder="Enter Country"/>
      <p>Head over to Cognizant {country} website!</p>

    </div>
  )
}

export default Company;