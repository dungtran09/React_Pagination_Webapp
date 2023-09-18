import React from "react";

const UserProfile = ({ avatar_url, login, html_url }) => {
  return (
    <div className="flex justify-center items-center flex-col border rounded-md bg-gray-100 gap-4 py-10">
      <img
        src={avatar_url}
        alt="image"
        className="w-24 p-2 borde-[2px] border-solid border rounded-full object-cover border-purple"
      />
      <div className="text-[1.2rem] font-bold"> {login}</div>
      <a href={html_url} className="tex-sm bg-purple p-2 text-white rounded-md">
        View Profile
      </a>
    </div>
  );
};

export default UserProfile;
