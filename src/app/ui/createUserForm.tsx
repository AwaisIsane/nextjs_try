"use client";

import { useActionState } from "react";
import { createUser } from "../lib/form_action";

const CreateUserForm = () => {
  const [state, action] = useActionState(createUser, undefined);
  return (
    <div>
      <form
        action={action}
        className="flex flex-col gap-2 p-4 border rounded-lg shadow-md w-full "
      >
        <h1 className="text-lg font-semibold">Create User Form</h1>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="p-2 border-rounded"
          />
          {state?.errors.name && <p>{state.errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="p-2 border-rounded"
          ></input>
          {state?.errors.email && <p>{state.errors.email}</p>}
        </div>
        <div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="phoneNumber"
            className="p-2 border-rounded"
          ></input>
          {state?.errors.phoneNumber && <p>{state.errors.phoneNumber}</p>}
        </div>
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          submit form
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
