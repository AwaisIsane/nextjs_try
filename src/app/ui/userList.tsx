"use client";
import { useState } from "react";
import { getUsersWithCompany } from "../lib/server_actions";

const UserList = () => {
  const [users, setUsers] = useState<
    Awaited<ReturnType<typeof getUsersWithCompany>>
  >([]);

  const getUserList = async () => {
    const data = await getUsersWithCompany();
    setUsers(data);
  };
  return (
    <>
      <button
        onClick={getUserList}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        get users
      </button>
      <ul className="space-y-4 p-4">
        {users.map((v) => (
          <li key={v.id} className="p-4  border rounded-lg shadow-md bg-white">
            <h3>Name:-{v.name}</h3>
            <p>phone:-{v.phoneNumber}</p>
            <p>
              companys:-
              {v.categories.map((v) => v.name).join(",")}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
