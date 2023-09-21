// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import "./profile.css"
// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();
//   const navigate = useNavigate();
//   let [state,setState] = useState(false)

  

//   useEffect(() => {
//     // Use the useEffect hook to trigger navigation
//     if (isAuthenticated && user && user.name) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, user, navigate]);

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   console.log("user", user);
//   console.log("state", state);

//   let handleClick=()=>{
//     setState(!state)

//   }

//   useEffect(()=>{
//     handleClick()
//   },[setState])

//   return (
//     <>
//       {isAuthenticated && (
//         <div onClick={handleClick}>
//           <img src={user.picture} alt={user.name} />
//           {/* <h2>{user.name}</h2>
//           <p>{user.email}</p> */}
//         </div>
//       )}
//       {/* {
//         state(
//           prompt("Do you wnat to log out")
//         )
//       } */}
//     </>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate();
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

  useEffect(() => {
    // Use the useEffect hook to trigger navigation
    if (isAuthenticated && user && user.name) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, user, navigate]);

  const handleLogout = () => {
    // You can trigger the logout process here.
    setShowLogoutPrompt(true); // Show a logout confirmation prompt
  };

  const confirmLogout = () => {
    // Handle the logout action and redirect to the home page or login page.
    logout();
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <img onClick={handleLogout} src={user.picture} alt={user.name} />
          {/* <h2>{user.name}</h2>
          <p>{user.email}</p> */}
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
      )}

      {showLogoutPrompt && (
        <div className="logout-prompt">
          <p>Do you want to log out?</p>
          <button onClick={confirmLogout}>Yes</button>
          <button onClick={() => setShowLogoutPrompt(false)}>No</button>
        </div>
      )}
    </>
  );
};

export default Profile;

