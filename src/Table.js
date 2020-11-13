import React from 'react';

const Table = ({catagory}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>type</th>

          <th>color</th>
          <th>price</th>
          <th>Avaibility</th>
        </tr>
      </thead>
      <tbody>
      { (catagory.length > 0) ? catagory.map( (cata, index) => {
           return (
            <tr key={ index }>
              <td>{ cata.id }</td>
              <td>{ cata.name }</td>
              <td>{ cata.manufacturer}</td>
           
              <td>{ cata.type }</td>
  
              <td>{ cata.color }</td>
       
              <td>{ cata.price }</td>
           <td>{cata.avaibility}</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table