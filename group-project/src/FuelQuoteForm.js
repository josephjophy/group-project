import React, { useState } from 'react';

function FuelQuoteForm() {
  const [address, setAddress] =useState('')
  const [gallons, setGallons] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [price, setPrice] = useState('2.88');
  const [totalAmountDue, setTotalAmountDue] = useState('');

  // Function to calculate the total amount due based on gallons and price
  const calculateTotalAmountDue = () => {
    const amount = gallons * price;
    setTotalAmountDue(amount.toFixed(2));
  };

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTotalAmountDue();
  };

  return (
    <div className="App">
      <h1>Fuel Quote Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gallons Requested:</label>
          <input
            type="number"
            value={gallons}
            required
            onChange={(event) => setGallons(event.target.value)}
          />
        </div>
        <div>
          <label>Delivery Address:</label>
          <input
            type ='text'
            value = {address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div>
          <label>Delivery Date:</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(event) => setDeliveryDate(event.target.value)}
          />
        </div>
        <div>
          <label>Suggested Price / gallon:</label>
          <input
            type="number"
            value={price}
            readOnly
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label>Total Amount Due:</label>
          <input
            type="number"
            value={totalAmountDue}
            readOnly
            onChange={(event) => setTotalAmountDue(event.target.value)}
          />
        </div>
        <button type="submit">Calculate Total Amount Due</button>
      </form>
    </div>
  );
}

export default FuelQuoteForm;
