import { Suspense } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
export default function TableRow({students, handleEdit, handleDelete, isLoading}) {
    return (
           
   <tbody> 
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4">{student.rollNo}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.course}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleEdit(student)}
                      className="text-blue-500 hover:text-blue-700"
                      disabled={isLoading}
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-500 hover:text-red-700"
                      disabled={isLoading}
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
         
    )
}