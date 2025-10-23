import React, { use } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../Provider/Authprovider";
import { useNavigate } from "react-router";

const Updateprofile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate()

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        alert("✅ Profile updated successfully!");
        navigate('/auth/myprofile')
      })
      .catch((error) => {
        console.error("❌ Update failed:", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center mt-5">
          Update Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset space-y-3">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                required
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                defaultValue={user?.photoURL}
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Update Profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;