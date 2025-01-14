# CRUD Web App with Next.js and .NET Core

This project demonstrates how to create a web application with CRUD (Create, Read, Update, Delete) operations using Next.js for the frontend and .NET Core for the backend.

## Features
- 🎨 **Frontend**: Built with Next.js, featuring a simple UI to perform CRUD operations.
- 🌐 **Backend**: Developed with .NET Core, providing RESTful APIs for managing data.

---

## Prerequisites
Ensure you have the following installed:
- 🛠️ Node.js (v16 or above)
- 🖥️ .NET SDK (v6 or above)
- ✏️ Visual Studio Code or any IDE of your choice

---

## Getting Started

### Clone the Repository
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

### Backend Setup (API)
1. 🖥️ Open the `Backend` folder in your IDE.
2. Run the following commands:
   ```bash
   dotnet new webapi -n StudentAPI
   cd StudentAPI
   dotnet restore
   ```
3. Add a model class for student data:
   ```csharp
   public class Student {
       public int RollNumber { get; set; }
       public string Name { get; set; }
       public string Course { get; set; }
   }
   ```
4. Add a controller to handle CRUD operations (e.g., `StudentsController`).
5. ▶️ Run the API:
   ```bash
   dotnet run
   ```
6. Verify the API is running at `https://localhost:5001` or `http://localhost:5000`.

---

### Frontend Setup (Next.js)
1. 🖥️ Open the `Frontend` folder in your terminal.
2. Run the following commands to set up the frontend:
   ```bash
   npm install
   npm run dev
   ```
3. 🌍 Access the frontend at `http://localhost:3000`.

---

## Folder Structure
##BackEnd
![{AA1A6492-F95F-415E-B1EC-CE4A586EC1D3}](https://github.com/user-attachments/assets/65f00cae-eb0c-4b05-8111-de8614602640)

## FrontEnd
![{B4976EBB-4398-438E-A32D-3583E97FE6E8}](https://github.com/user-attachments/assets/a90368d5-14c2-45bb-8b17-5162763700fe)


---

## Screenshot
![image](https://github.com/user-attachments/assets/e81ab803-bf2d-40ed-b2a4-f4b516d15a60)

---

## Conclusion
This project provides a basic yet functional example of integrating Next.js and .NET Core for creating CRUD applications. You can extend this setup to include more features like authentication, database integration, and advanced UI components.
