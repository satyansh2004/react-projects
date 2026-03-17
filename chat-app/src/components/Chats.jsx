import React from "react";
import userImg from "../assets/user.png";

function Chats() {
  return (
    <div className="flex flex-row gap-2 items-start w-full justify-end">
      <p className="text-md p-3 px-4 bg-green-300 border-0 rounded-4xl w-[90%] md:w-2/3">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, blanditiis.
      </p>
      <img
        src={userImg}
        alt="userimg"
        width={50}
        height={50}
        className="border border-primary rounded-4xl"
      />
    </div>
  );
}

export default Chats;
