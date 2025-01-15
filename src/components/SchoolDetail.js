import { useParams } from "react-router-dom";
import { getSchool } from "../api";

export default function SchoolDetail() {
  const { schoolId } = useParams(); // Extract the schoolId from the URL
  const school = getSchool({ schoolId }); // Fetch the school data based on schoolId

  if (!school?.name) { // If school is not found
    return (
      <div className="container">
        <h2>School not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{school.name} Details</h2>
      <ul className="course-list">
        {school.courses?.map((course) => (
          <li key={course.id}>
            <p className="course-name">{course.name}</p>
            <p>{course.lecturer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
