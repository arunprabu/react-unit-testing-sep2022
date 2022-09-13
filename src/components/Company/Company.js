import React from 'react'

const Company = ( {name} ) => {

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
    </div>
  )
}

export default Company;