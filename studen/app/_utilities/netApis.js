const BASE_URL = "http://localhost:5212/api/Student";

export const getAllStudents = async () => {
  const response = await fetch(`${BASE_URL}/GetAll`);
  if (!response.ok) throw new Error("Failed to fetch students");
  const data = await response.json();
  return data;
};

export const addStudent = async (student) => {
 
  const response = await fetch(`${BASE_URL}/AddStudent`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(student),
  });
  if (!response.ok) throw new Error("Failed to add student");
  return response.json();
};

export const updateStudent = async (id, updatedData) => {
 console.log("updatedData",id ,updatedData);
  
  const response = await fetch(`${BASE_URL}/UpdateStudent/${id}`, {
    method: "PATCH",
       body: JSON.stringify(updatedData),
  });
  if (!response.ok) throw new Error("Failed to update student");
  return response.json();
};

export const deleteStudent = async (id) => {
  const response = await fetch(`${BASE_URL}/DeleteStudent/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete student");
  return response.json();
};
