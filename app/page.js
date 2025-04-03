"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [studentList,setStudentList]=useState([])

  useEffect(() => {
    loadStudentList();
  },[])

  async function loadStudentList() {
    const {data,error} =  await supabase.from("Student").select();
    if(error) {
      alert(JSON.stringify(error))
    }
    setStudentList(data)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold text-blue-600">Students List</h1>
      {studentList.map((stud, index) => {
        return(
          <div key={index} className="border rounded-lg shadow-md p-4 w-80 bg-white my-4">
            <h2 className="text-lg font-semibold text-gray-800">{stud.name}</h2>
            <p className="text-sm text-gray-600"><strong>USN:</strong> {stud.usn}</p>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {stud.email}</p>
            <p className="text-sm text-gray-600"><strong>Phone:</strong> {stud.phone}</p>
            <p className="text-sm text-gray-600"><strong>Address:</strong> {stud.addr}</p>
            <p className="text-sm text-gray-600"><strong>Age:</strong> {stud.age}</p>
            <p className="text-sm text-gray-600"><strong>Gender:</strong> {stud.gender}</p>
          </div>
        )
      })}
    </div>
  );
}
