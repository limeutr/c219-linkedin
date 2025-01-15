const schools = [
  {
    id: "1",
    name: "Information Technology",
    courses: [
      { id: "1", name: "UI/UX Design for Apps", lecturer: "Azhar Kamar" },
      { id: "2", name: "Mobile App Development", lecturer: "Derek Lee" }
    ]
  },
  {
    id: "2",
    name: "Financial Technology",
    courses: [
      { id: "1", name: "Software Application Development", lecturer: "Hannah Lim" },
      { id: "2", name: "Payment Technologies", lecturer: "Magdalene Lim" }
    ]
  }
];

export function getSchool({ schoolId }) {
  const school = schools.find(({ id }) => id === schoolId);
  return school || {}; 
}

export function getSchools() {
  return schools.map(({ name, id }) => ({ name, id }));
}

export function getCourse({ courseId, schoolId }) {
  return schools
    .find(({ id }) => id === schoolId)
    .courses.find(({ id }) => id === courseId);
}
