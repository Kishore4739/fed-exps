import UserContextDemo from "./userContextDemo";
import UserProvider from "./userProvider";
export default function App() {
  return (
    <UserProvider>
      <div>
        <h1>USER PROFILE</h1>
        <UserContextDemo />
      </div>
    </UserProvider>
  );
}