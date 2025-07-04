import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.example.com/doctors";
const API_KEY = "12345-ABCDE";

function App() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((res) => {
      setDoctors(res.data);  // Assuming API returns an array of doctors
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setError("Failed to fetch doctors.");
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Doctor List</h1>
      <ul>
        {doctors.map((doc) => (
          <li key={doc.id}>{doc.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

