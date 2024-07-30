import React, { useState } from "react";
import { useUserContext } from "../Context";
import Userinput from "./Userinput";

function Navbar() {
  const expences = useUserContext();
  const [bud, setbud] = useState("")
  const handleClick = () => {
    expences.setContent(true);
    return;
  };
  return (
    <div>
      <nav className="border border-black flex justify-between h-[17vh] items-center bg-slate-300 max-[600px]:h-[10vh] ">
        <div className="w-[10vw] max-[600px]:hidden">wellcome {expences.username}</div>
        <button
          className="border border-black rounded hover:bg-slate-500 "
          onClick={handleClick}
        >
          Add Expences
        </button>
        <div>
          <input
            type="number"
            placeholder="Budget"
            className="border border-black rounded w-[12vw]"
            value={bud}
            onChange={(e)=>setbud(e.target.value)}
          />
          <button className="border border-black rounded hover:bg-slate-500 " onClick={()=>expences.setBudget(bud)}>
            Add Budget
          </button>
        </div>
        <div className="bg-slate-900 h-[50px] w-[50px]  border-black rounded-full"></div>
      </nav>
      <div>{expences.showContent && <Userinput />}</div>
    </div>
  );
}

export default Navbar;
