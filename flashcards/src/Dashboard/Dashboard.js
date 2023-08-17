import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="DashBoard flex justify-evenly flex-col space-y-6  ">
        <div className="header m-auto my-6">
          <p className="text-3xl"> DashBoard</p>
        </div>
        <div className="content flex justify-center space-x-14  ">
          <div className=" bg-purple-100	 text-purple-700 rounded-lg	w-44 h-32 space-y-4">
            <p className="font-semibold text-2xl mt-6 ml-6">34</p>
            <p className="ml-6">Studied Cards</p>
          </div>
          <div className=" bg-orange-100	text-orange-700 rounded-lg w-44 h-32	space-y-4">
            <p className="font-semibold text-2xl mt-6 ml-6">18</p>
            <p className="ml-6"> Deck Created</p>
          </div>
        </div>
      </div>
    </div>
  );
}
