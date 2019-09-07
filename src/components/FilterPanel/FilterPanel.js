import React from 'react';

const FilterPanel = ({ filterFunc }) => {
  return (
    <div className="row">
      <div key="filterByID" className="input-field col s2">
        <i className="material-icons prefix employees__icon">confirmation_number</i>
        <input id="filterByID" type="text" onChange={filterFunc} />
        <label htmlFor="filterByID">ID</label>
      </div>
      <div key="filterByFirstName" className="input-field col s3">
        <i className="material-icons prefix employees__icon">person</i>
        <input id="filterByFirstName" type="text" onChange={filterFunc} />
        <label htmlFor="filterByFirstName">Imię</label>
      </div>
      <div key="filterByLastName" className="input-field col s3">
        <i className="material-icons prefix employees__icon">person</i>
        <input id="filterByLastName" type="text" onChange={filterFunc} />
        <label htmlFor="filterByLastName">Nazwisko</label>
      </div>
      <div key="filterByEmail" className="input-field col s2">
        <i className="material-icons prefix employees__icon">mail</i>
        <input id="filterByEmail" type="email" onChange={filterFunc} />
        <label htmlFor="filterByEmail">Email</label>
      </div>
      <div key="filterByPhone" className="input-field col s2">
        <i className="material-icons prefix employees__icon">phone</i>
        <input id="filterByPhone" type="number" onChange={filterFunc} />
        <label htmlFor="filterByPhone">Telefon</label>
      </div>
    </div>
  );
};

export default FilterPanel;
