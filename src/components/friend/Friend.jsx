import { AtSymbolIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, email, username } = friend;
  console.log(friend);
  return (
    <div className=" bg-red-300 py-5">
      <p className="text-center text-white font-bold capitalize text-xl pb-8">
        {name}
      </p>
      <p className="inline-flex justify-center mx-auto w-full">
        <AtSymbolIcon className="w-6" />
        {email}
      </p>
      <Link to={`/friend/${id}`}>
        <p className="text-center underline">{username}</p>
      </Link>
    </div>
  );
};

export default Friend;
