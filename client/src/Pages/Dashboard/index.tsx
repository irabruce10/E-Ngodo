import { useUser } from "@clerk/clerk-react";
import { AccountForm } from "./accountForm";
import { AccountList } from "./accountList";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.firstName}!Here Are your Finances</h1>

      <AccountForm />
      <AccountList />
    </div>
  );
}
