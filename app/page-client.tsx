'use client';

import { useState } from "react";
import { addUser, deleteUser, getServerResponse, loadUser, updateUser } from "./user.action";
import { User } from "@prisma/client";

const ClientComponent = () => {

    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState("");

    const [userData, setUserData] = useState<User | null>(null);

    async function handleClick() {
        const response = await getServerResponse();
        setMessage(response);
    }
    async function handleAddUser() {
        const response = await addUser();
        setUserId(response.id);
        setUserData(response);
        setMessage("User Added Successfully!");
    }

    async function handleLoadUser() {
        const response = await loadUser(userId);
        setUserData(response);
        setMessage("User Loaded Successfully!");
    }

    async function handleUpdateUser() {
        const response = await updateUser(userId);
        setUserData(response);
        setMessage("User Updated Successfully!");
    }

    async function handleDeleteUser() {
        const response = await deleteUser(userId);
        setUserData(null);
        setMessage("User Deleted Successfully!");
    }

    return (
        <>
            <button className="p-3 bg-gray-200 rounded-lg m-2 ml-8 shadow-md" onClick={handleClick}> Call Server Action</button>
            <button className="p-3 bg-green-200 rounded-lg m-2 ml-8 shadow-md text-green-700" onClick={handleAddUser}> Add User</button>
            <button className="p-3 bg-blue-200 rounded-lg m-2 ml-8 shadow-md text-blue-700" onClick={handleLoadUser}> Load User</button>
            <button className="p-3 bg-orange-200 rounded-lg m-2 ml-8 shadow-md text-orange-700" onClick={handleUpdateUser}> Update User</button>
            <button className="p-3 bg-red-200 rounded-lg m-2 ml-8 shadow-md text-red-700" onClick={handleDeleteUser}> Delete User</button>

            {message && (
                <div className="p-3 bg-green-200 rounded-lg m-2 ml-8 shadow-md text-green-800 mr-8">
                    {message}
                </div>
            )}

            <div className="p-6 ml-1">
                <div className="overflow-x-auto rounded-lg">
                    <table className="min-w-full border-4 border-gray-300 rounded-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left border-b">Field</th>
                                <th className="px-4 py-2 text-left border-b">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData && (
                                    Object.entries(userData).map(([key, value]) => (
                                        <tr key={key} className="border-b">
                                            <td className="px-4 py-2 font-medium">{key}</td>
                                            <td className="px-4 py-2">{String(value)}</td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ClientComponent;