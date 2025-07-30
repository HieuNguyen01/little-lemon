// src/Main.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

export default function Main({ submitForm }) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={<BookingPage submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}


// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Homepage from "./components/Homepage";
// import BookingPage from "./components/BookingPage";
// import ConfirmedBooking from "./components/ConfirmedBooking";

// export default function Main({ submitForm }) {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={<Homepage />}
//       />
//       <Route
//         path="/reservations"
//         element={<BookingPage submitForm={submitForm} />}
//       />
//       <Route
//         path="/confirmed"
//         element={<ConfirmedBooking />}
//       />
//     </Routes>
//   );
// }
