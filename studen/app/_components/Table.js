export default function Table({children}) {
    return (
        <>
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Roll Number</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Course</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          
          {children}
          
         
        </table>
      </div>
    
    </>
        )
}