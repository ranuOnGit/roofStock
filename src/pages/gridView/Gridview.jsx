import React from 'react'
import { Link } from 'react-router-dom'
import './Gridview.css'

const Gridview = ({ list, moreDetails }) => {
  return (
    <div className='gridview'>
      {list.map((el) => {
        const { id, address, physical, financial, mainImageUrl } = el;
        return (
          <div key={id} className='grid-div'>
            <Link to={`/property/${id}`}>
              <img src={mainImageUrl} alt='' className='grid-photo'/>
            </Link>
            <br />
            {address.address1 }
            <br />
            {address.city }{', '}
            
            {address.state } {' '}
            {address.zip} <br />{address.country}
            <br />
            Year Built :{physical && physical.yearBuilt}
            <br />
            List Price : $
            {financial && Math.round(financial.listPrice).toFixed(2)}
            <br />
            Monthly Rent : $
            {financial && Math.round(financial.monthlyRent).toFixed(2)}
            <br />
            Gross Yield :
            {financial &&
              Math.round(
                (financial.monthlyRent * 12) / financial.listPrice,
              )}{' '}
            %
            <br />
            <button className='btn btn-danger' onClick={() => moreDetails(el)}>DETAILS</button>
          </div>
        );
      })}
    </div>
  );
};

export default Gridview
