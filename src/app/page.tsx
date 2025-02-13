import AllocateUserForm from "./ui/allocateUserCompany";
import CreateCompanyForm from "./ui/createCompanyForm";
import CreateUserForm from "./ui/createUserForm";
import UserDataFilterCompany from "./ui/getUserData";
import UserList from "./ui/userList";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        <CreateUserForm />
        <CreateCompanyForm />
        <AllocateUserForm />
      </div>
      <UserList />
      <UserDataFilterCompany />
    </>
  );
}
