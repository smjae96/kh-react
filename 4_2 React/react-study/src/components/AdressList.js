import React from 'react';

function AdressList({no, name, phone}) {
    return (
        <tr>
           <td>{no}</td>
           <td>{name}</td> 
           <td>{phone}</td>
        </tr>
    );
}

export default AdressList;