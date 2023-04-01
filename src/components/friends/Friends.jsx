import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../friend/Friend";

const Friends = () => {
  const data = useLoaderData();
  return (
    <div className="containe mt-12">
      <div className="friends grid grid-cols-3 gap-y-11 gap-x-7">
        {data.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
