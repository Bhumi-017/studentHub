"use client";
import InputField from "@/app/components/inputField";
import { supabase } from "@/app/lib/supabase";
import useStore from "@/app/stores/studentStore";
import { Share, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateStudent() {
  const router = useRouter();
  const { setActiveStudent } = useStore();

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
          type="text"
          placeholder="Student Name"
          onChange={(e) => setName(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={usn}
          type="text"
          placeholder="Student USN"
          onChange={(e) => setUsn(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={age}
          type="number"
          placeholder="Student Age"
          onChange={(e) => setAge(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={email}
          type="email"
          placeholder="Student Email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={address}
          type="text"
          placeholder="Student Address"
          onChange={(e) => setAddress(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={gender}
          type="text"
          placeholder="Student Gender"
          onChange={(e) => setGender(e.target.value)}
          className="h-10 w-full"
        />

        <InputField
          value={phone}
          type="tel"
          placeholder="Student Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          className="h-10 w-full"
        />

        <button
          onClick={async () => {
            if (usn=="" ||name=="" ||email=="" ||age=="" ||address=="" ||phone=="" ||gender=="") {
              alert("Please fill all the fields");
              return;
            }
            else{
            try {
              const { data, error } = await supabase.from("student").insert([
                { 
                    name:name,
                    usn:usn,
                    phone:phone,
                    email:email,
                    address:address,
                    age:age,
                    gender:gender,
                }
              ]).select();

              if (error !=null) {
                throw error
              }

              alert(`Student Profile Created \n ${JSON.stringify(data)}`);
              setActiveStudent(data[0]);
              router.push("/students/profile");
            } catch (e) {
              alert(`Error: ${JSON.stringify(e)}`);
            }
        }
        }}
          className="bg-blue-500 text-white text-lg px-6 py-3 rounded-md shadow-md hover:bg-blue-600 flex items-center space-x-2 transition-all w-full justify-center"
        >
          <span>Create Profile</span>
          <Share size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
