"use client";

import { useActionState } from "react";
import { createCompany } from "../lib/form_action";

const CreateCompanyForm = () => {
  const [state, action] = useActionState(createCompany, undefined);
  return (
    <div>
      <form
        action={action}
        className="flex flex-col gap-2 p-4 border rounded-lg shadow-md w-full "
      >
        <h1 className="text-lg font-semibold">Create Company Form</h1>
        <input
          type="text"
          name="companyName"
          placeholder="companyName"
          className="p-2 border-rounded"
        />
        {state?.errors.companyName && <p>{state.errors.companyName}</p>}
        <input
          type="text"
          name="city"
          placeholder="city"
          className="p-2 border-rounded"
        ></input>
        {state?.errors.city && <p>{state.errors.city}</p>}
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          submit form company
        </button>
      </form>
    </div>
  );
};

export default CreateCompanyForm;
