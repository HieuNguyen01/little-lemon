// src/App.js
import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./Main";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppContent />
      <Footer />
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();

  function submitForm(formData) {
    const ok = window.submitAPI(formData);
    if (ok) {
      navigate("/confirmed");
    } else {
      alert("Sorry, that slot is no longer available.");
    }
  }

  return <Main submitForm={submitForm} />;
}


// import React from "react";
// import { BrowserRouter, useNavigate } from "react-router-dom";

// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
// import Main from "./Main";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Nav />
//       <AppContent />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// function AppContent() {
//   const navigate = useNavigate();

//   function submitForm(formData) {
//     const ok = window.submitAPI(formData);
//     if (ok) {
//       navigate("/confirmed");
//     } else {
//       alert("Sorry, that slot is no longer available.");
//     }
//   }

//   return <Main submitForm={submitForm} />;
// }
