import React from 'react'
import roboImg from "../assets/robo.avif";

function RoboChat({ roboInput }) {
  return (
    <div className="flex flex-row gap-2 items-start w-full justify-start">
          <img
            src={roboImg}
            alt="userimg"
            width={50}
            height={50}
            className="border border-primary rounded-4xl"
          />
          <p className="text-md p-3 px-4 bg-blue-300 border-0 rounded-4xl w-[90%] md:w-2/3">
            {roboInput}
          </p>
        </div>
  )
}

export default RoboChat