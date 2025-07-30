import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

function initializeTimes() {
  return window.fetchAPI(new Date());
}

function updateTimes(_, action) {
  return window.fetchAPI(new Date(action));
}

export default function BookingPage({ submitForm }) {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  return (
    <main className="booking-page">
      <h1>Reserve Your Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}
