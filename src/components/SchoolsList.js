import { Link } from "react-router-dom";
import { getSchools } from "../api"; 

export default function SchoolsList() {
  const schools = getSchools(); 

  return (
    <div className="container">
      <h1>Schools</h1>
      <ul className="school-list">
        {schools.map(school => (
          <li key={school.id}>
            <Link to={`/schools/${school.id}`}>{school.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
