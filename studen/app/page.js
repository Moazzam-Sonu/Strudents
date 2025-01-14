"use client";

import { useState, useEffect} from "react";
import { getAllStudents, addStudent, updateStudent, deleteStudent } from "@/app/_utilities/netApis";
import Table from "@/app/_components/Table";
import TableRow from "@/app/_components/TableRow";
import Input from "@/app/_components/Input";
export default function Home() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    RollNo: "",
    Name: "",
    Course: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 
  const fetchStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editMode) {
        await updateStudent(editId, formData);
      } else {
      
        await addStudent(formData);
      }

      await fetchStudents();
    
      setFormData({ RollNo: "", Name: "", Course: "" });
      setEditMode(false);
      setEditId(null);
    } catch (error) {
      console.error('Error saving student:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;

    try {
      await deleteStudent(id);
    
      await fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleEdit = (student) => {
    console.log("data",student);
    setFormData({
      RollNo: student.rollNo || "",
      Name: student.name || "",
      Course: student.course || "",
    });
    setEditMode(true);
    setEditId(student.id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 space-y-4">
        <div className="space-y-4">
          <Input
            placeholder="Roll Number"
            value={formData.RollNo || ""}
            onChange={(e) =>
              setFormData({ ...formData, RollNo: e.target.value })
            }
            required
            disabled={isLoading}
          />
          <Input
            placeholder="Name"
            value={formData.Name || ""}
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
            required
            disabled={isLoading}
          />
          <Input
            placeholder="Course"
            value={formData.Course || "" }
            onChange={(e) => setFormData({ ...formData, Course: e.target.value })}
            required
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : editMode ? 'Update' : 'Submit'}
        </button>
      </form>

      <Table>

     
          <TableRow students={students} handleEdit={handleEdit} handleDelete={handleDelete} isLoading={isLoading} />
      


      </Table>


      </div>
  );
}