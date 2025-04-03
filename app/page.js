"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    loadStudentList();
  }, []);

  async function loadStudentList() {
    const { data, error } = await supabase.from("student").select();
    if (error) {
      alert(JSON.stringify(error));
    }
    setStudentList(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Students List</h1>
      {studentList.map((stud, index) => (
        <div key={index} className="border rounded-lg shadow-md p-4 w-80 bg-white my-4">
          <h2 className="text-lg font-semibold text-gray-800">{stud.name}</h2>
          <p className="text-sm text-gray-600"><strong>USN:</strong> {stud.usn}</p>
          <p className="text-sm text-gray-600"><strong>Email:</strong> {stud.email}</p>
          <p className="text-sm text-gray-600"><strong>Phone:</strong> {stud.phone}</p>
          <p className="text-sm text-gray-600"><strong>Address:</strong> {stud.address}</p>
          <p className="text-sm text-gray-600"><strong>Age:</strong> {stud.age}</p>
          <p className="text-sm text-gray-600"><strong>Gender:</strong> {stud.gender}</p>
        </div>
      ))}

      <Link href="/students/create">
        <button className="bg-blue-500 text-white text-lg px-6 py-3 rounded-md mt-6 shadow-md hover:bg-blue-600 transition-all">
          Add Student
        </button>
      </Link>
    </div>
  );
}
