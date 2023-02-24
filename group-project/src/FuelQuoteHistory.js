import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FuelQuoteForm from './FuelQuoteForm';


function FuelQuoteHistory(){

    return (
        <table>
  <tr>
    <th>Full Name</th>
    <th>Address 1</th> 
    <th>Address 2</th>
    <th>City</th>
    <th>State</th>
    <th>Zipcode</th>
  </tr>
</table>
    );

}

export default FuelQuoteHistory