import React, { useEffect, useState } from "react";

function Profile({handleLogOut}) {
    let [user, setUser] = useState(null);

console.log('Profile Display')

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            setUser(savedUser);
        } else {
            // Redirect to login page if user data is not available
            // You can use react-router-dom or other methods for navigation
        }
    }, []);

    console.log('Local Storage user', user)

    //when page loads fetch data using id stored in localStorage
    useEffect(() => {
        if (user) {
            fetch(`https://dummyjson.com/users/${user.id}`)
                .then((response) => response.json())
                .then((userData) => {
                    setUser(userData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        console.log('user', user)
    }, []);

    return (
        <div className="signIn">
            <p>Welcome back! 👋</p>
            <h3 className="signIn-title">Profile of your account</h3>
            <div className="displayBox">
                { user &&
                    (<>
                        <p>Welcome, {user.username}!</p>
                        <p>Name: {user.firstName} {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Gender: {user.gender}</p>
                    </>)
                
                }
                  <button onClick={handleLogOut} type="submit" className="btn">
            LOG OUT
          </button>
              
            </div>
            <p className="forgetPassword"></p>
        </div>
    );
}

export default Profile;
