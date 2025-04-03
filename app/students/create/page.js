"use client";
import InputField from "@/app/components/inputField";
import { supabase } from "@/app/lib/supabase";
import { Share, User2Icon } from "lucide-react";
import { useState } from "react";

export default function CreateStudent() {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mt-12 mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Create Student</h1>
      <User2Icon size={32} className="text-gray-600 mb-4" />

      {/* Centered Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <InputField
          value={name}
          text="text"
          placeholder="Student Name"
          onChange={(e) => setName(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={usn}
          text="text"
          placeholder="Student USN"
          onChange={(e) => setUsn(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={age}
          text="number"
          placeholder="Student Age"
          onChange={(e) => setAge(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={email}
          text="email"
          placeholder="Student Email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={address}
          text="text"
          placeholder="Student Address"
          onChange={(e) => setAddress(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={gender}
          text="text"
          placeholder="Student Gender"
          onChange={(e) => setGender(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={phone}
          text="tel"
          placeholder="Student Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          className="h-10 w-full"
        />

        <button
          onClick={async () => {
            if (!usn || !name || !email || !phone || !address || !gender) {
              alert("Please fill all the fields");
              return;
            }

            try {
              const { data, error } = await supabase.from("student").insert([
                { name, usn, phone, email, address, gender, age },
              ]);

              if (error) throw error;

              alert(`Student Profile Created \n ${JSON.stringify(data)}`);
            } catch (e) {
              alert(`Error: ${JSON.stringify(e)}`);
            }
          }}
          className="bg-blue-500 text-white text-lg px-6 py-3 rounded-md shadow-md hover:bg-blue-600 flex items-center space-x-2 transition-all w-full justify-center"
        >
          <span>Create Profile</span>
          <Share size={20} />
        </button>
      </div>
    </div>
  );
}
