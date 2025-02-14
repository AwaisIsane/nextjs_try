"use client";
import { useState } from "react";
import { getUsersWithCompanyName } from "../lib/server_actions";

const UserDataFilterCompany = () => {
  const [users, setUsers] = useState<
    Awaited<ReturnType<typeof getUsersWithCompanyName>>
  >([]);
  const [company, setCompany] = useState("");
  const getUserList = async () => {
    const data = await getUsersWithCompanyName(company);
    setUsers(data);
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="p-2 border-rounded"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <button
        onClick={getUserList}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        get users by company
      </button>
      <ul className="space-y-4 p-4">
        {users.map((v) => (
          <li key={v.id} className="p-4  border rounded-lg shadow-md bg-white">
            <h3>Name:-{v.name}</h3>
            <p>city:-{v.city}</p>
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

export default UserDataFilterCompany;
