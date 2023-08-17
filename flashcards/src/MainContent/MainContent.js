import React from "react";

export default function MainContent() {
  return (
    <div>
      <div className="Deck-list text-2xl my-10 ">Decks</div>
      <div className="grid grid-rows-4  space-y-2">
        <div className="font-normal  text-xl w-54 h-12 grid content-center rounded shadow-lg pl-4 border-b-4 border-indigo-500 outline  outline-slate-100 ">
          <p>Operating System</p>
        </div>
        <div className="font-normal  text-xl w-54 h-12 grid content-center rounded shadow-lg pl-6 border-b-4 border-indigo-500 outline  outline-slate-100">
          <p>Computer Network</p>
        </div>
        <div className="font-normal  text-xl w-54 h-12 grid content-center rounded shadow-lg pl-6 border-b-4 border-indigo-500 outline  outline-slate-100">
          <p>Software Management</p>
        </div>
        <div className="font-normal  text-xl w-54 h-12 grid content-center rounded shadow-lg pl-6 border-b-4 border-indigo-500 outline  outline-slate-100">
          <p>DataBase Management System</p>
        </div>
        <div className="font-normal  text-xl w-54 h-12 grid content-center rounded shadow-lg pl-6 border-b-4 border-indigo-500 outline  outline-slate-100">
          <p>Object Orient Programming</p>
        </div>
      </div>
    </div>
  );
}
