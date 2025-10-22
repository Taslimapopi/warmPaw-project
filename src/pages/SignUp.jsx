import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';

const SignUp = () => {
 const {createUser,setUser} = use(AuthContext)

  const handleSignUp = (e) =>{
    e.preventDefault();
    const form  = e.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photo = form.photo.value

    console.log(name,email,photo,password)
    createUser(email,password)
    .then(result=>{
     const user = result.user
      setUser(user)
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    alert('errorcode')
  });

  } 

    return (
        <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center mt-5">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
                />
              {/* photourl */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              {/* register button */}
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;