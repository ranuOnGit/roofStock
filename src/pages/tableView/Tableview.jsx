import React from 'react';
import './Tableview.css'

const Tableview = ({ list, moreDetails }) => {
  return (
    <div className='tableview'>
      <table className='table table-primary table-striped table-hover'>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>ADDRESS</th>
            <th>YEAR BUILT</th>
            <th>LIST PRICE</th>
            <th>MONTHLY RENT</th>
            <th>GROSS YIELD</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        {list.map((el) => {
          const { id, address, physical, financial, mainImageUrl } = el;
          return (
            <tr key={id}>
              <td>
                <img src={mainImageUrl} alt='' className='table-photo' />
              </td>
              <td>
                {address.address1}
                <br />
                {address.city}{', '}
                {address.state} {address.zip}
                <br />
                {address.country}
              </td>
              <td>{physical && physical.yearBuilt}</td>
              <td>
                ${financial && Math.round(financial.listPrice).toFixed(2)}
              </td>
              <td>
                {financial && Math.round(financial.monthlyRent).toFixed(2)}
              </td>
              <td>
                Gross Yield :
                {financial &&
                  Math.round(
                    (financial.monthlyRent * 12) / financial.listPrice,
                  )}{' '}
                %
              </td>
              <td>
                {' '}
                <button onClick={() => moreDetails(el)}>MORE</button>
              </td>
            </tr>
          );
        })}
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Tableview;

// {
//   list.map((el) => {
//     const { id, address, physical, financial, mainImageUrl } = el;
//     return (
//       <div key={id}>
//         <img src={mainImageUrl} alt='' />
//         {!mainImageUrl && <p>IMAGE NOT FOUND</p>}
//         <br />
//         Address :{address.address1},{address.city},{address.state},{address.zip}
//         ,{address.country}
//         <br />
//         Year Built :{physical && physical.yearBuilt}
//         <br />
//         List Price : ${financial && Math.round(financial.listPrice).toFixed(2)}
//         <br />
//         Monthly Rent : $
//         {financial && Math.round(financial.monthlyRent).toFixed(2)}
//         <br />
//         Gross Yield :
//         {financial &&
//           Math.round((financial.monthlyRent * 12) / financial.listPrice)}{' '}
//         %
//         <br />
//         <button onClick={() => moreDetails(el)}>DETAILS</button>
//       </div>
//     );
//   });
// }
