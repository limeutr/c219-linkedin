import React from "react";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const { name, email, course } = location.state || {};  // Ensure state is passed

  return (
    <div className="container">
      <h1>Thank You, {name}!</h1>
      <p>You're now registered for {course}.</p>
      <p>We'll email to {email} shortly.</p>
    </div>
  );
}
