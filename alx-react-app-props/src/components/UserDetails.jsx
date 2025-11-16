// UserDetails.jsx
// src/components/UserDetails.jsx
import { useContext } from "react";
import { UserContext } from "../UserContext";// UserDetails file is in the components folder hence .. to get to UserContext
function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
export default UserDetails;
