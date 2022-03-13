import React from "react";
import "./index.css";
import { useEffect } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

export default function StockData() {


  const [date, setDate] = React.useState('');
  const [open, setOpen] = React.useState('');
  const [close, setClose] = React.useState('');
  const [high, setHigh] = React.useState('');
  const [low, setLow] = React.useState('');

  const fetchData = () => {
    const Url = 'https://jsonmock.hackerrank.com/api/stocks/?date=' + date;
    console.log(Url);
    fetch(Url)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        if (result.data) {
          setOpen(result.data[0].open);
          setClose(result.data[0].close);
          setHigh(result.data[0].high);
          setLow(result.data[0].low);
        }
      }
      )
      .catch(error => console.log('error', error));


  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="text"
          className="large"
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input" />
        <button
          onClick={fetchData}
          className=""
          id="submit-button"
          data-testid="submit-button">Search</button>
      </section>
      <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10">Open: {open}</li>
        <li className="py-10">Close: {close}</li>
        <li className="py-10">High: {high}</li>
        <li className="py-10">Low: {low}</li>
      </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No Results Found</div>
    </div>
  );
}
