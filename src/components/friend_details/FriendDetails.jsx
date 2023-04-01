import {
  ArrowLeftIcon,
  AtSymbolIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const data = useLoaderData();
  const { name, email, phone, website } = data;
  return (
    <div className=" text-center">
      <div className="text-4xl text-center mt-5">
        Everythin you need to know.
      </div>
      <div className="flex place-content-center my-7">
        <div className=" bg-red-300 py-5 w-1/4">
          <p className="text-center text-white font-bold capitalize text-xl pb-8">
            {name}
          </p>
          <p className="inline-flex justify-center mx-auto w-full pb-1">
            <AtSymbolIcon className="w-6" />
            {email}
          </p>
          <p className="inline-flex justify-center mx-auto w-full">
            <PhoneIcon className="w-6" />
            {phone}
          </p>
          <p className="inline-flex justify-center mx-auto w-full pb-1">
            <GlobeAltIcon className="w-6" />
            <a href={website} target="_blank">
              {website}
            </a>
          </p>
          <Link to={"/friends"}>
            {" "}
            <p className=" inline-flex mt-11 text-red-600">
              <ArrowLeftIcon className="w-6" /> back
            </p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
