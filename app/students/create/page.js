"use client"
import InputField from '@/app/components/inputField';
import { supabase } from "@/app/lib/supabase";
import { Share, User2Icon } from "lucide-react";
import { useState } from 'react';


export default function createStudent() {
    const [name, setName] = useState("");
    const [usn, setusn] = useState("")
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState("");
    const [gender, setgender] = useState("");

    return (
        <div className='min-h-screen flex flex-col justify-center items-center mt-8'>
            <h1 className='text-3xl font-bold text-green-500 mb-6'>Create Student</h1>
            <h1  className="ml-2 mb-8" ><User2Icon size={20}/></h1>

            <InputField 
                value={name} 
                text={'text'}
                placeholder={"student name"}
                onChange={(e) => setName(e.target.value)} 
                className="mb-4"
            />

            <InputField 
                value={usn} 
                text={'text'}
                placeholder={"student USN"}
                onChange={(e) => setusn(e.target.value)} 
                className="mb-4"
            />

            <InputField 
                value={age} 
                text={'text'}
                placeholder={"student age"}
                onChange={(e) => setAge(e.target.value)} 
                className="mb-4"
            />

            <InputField 
                value={email} 
                text={'text'}
                placeholder={"student email"}
                onChange={(e) => setEmail(e.target.value)} 
                className="mb-4"
            />

            <InputField 
                value={address} 
                text={'text'}
                placeholder={"student address"}
                onChange={(e) => setAddress(e.target.value)} 
                className="mb-4"
            />

            <InputField 
                value={gender} 
                text={'text'}
                placeholder={"student gender"}
                onChange={(e) => setgender(e.target.value)} 
                className="mb-4"
            />

            <InputField 
                value={phone} 
                text={'text'}
                placeholder={"student phone number"}
                onChange={(e) => setPhone(e.target.value)} 
                className="mb-4"
            />

            <button 
                onClick={async (event) => {
                    if (usn === "" || name === "" || email === "" || phone === "" || address === "" || gender === "") {
                        alert("Please fill all the fields")
                        return;
                    } else {
                        try {
                            const { data, error } = await supabase.from('student').insert([
                                {
                                    name: name,
                                    usn: usn,
                                    phone: phone,
                                    email: email,
                                    address: address,
                                    gender: gender,
                                    age: age
                                }
                            ]).select();

                            if (error != null) {
                                throw error;
                            }
                            alert(`Student Profile Created \n ${JSON.stringify(data)}`);
                        } catch (e) {
                            alert(`Error: ${JSON.stringify(e)}`);
                        }
                    }
                }}
                className="flex flex-row bg-green-800 text-white text-lg p-3 rounded-md mt-8 shadow space-x-2">
                Create Profile
                <Share size={20} className="ml-2"/>
                </button>

        </div>
    )
}
