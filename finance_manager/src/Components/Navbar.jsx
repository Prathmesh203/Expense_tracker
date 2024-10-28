import React, { useState } from "react";
import { useUserContext } from "../Context";
import Userinput from "./Userinput";
import '../App.css'

function Navbar() {
  const expences = useUserContext();
  const [bud, setbud] = useState("")
  const handleClick = () => {
    expences.setContent(true);
    return;
  };
  return (
    <div>
      <nav className="flex justify-around items-center py-4 " style={{backgroundColor:"#3C3D37"}}>
        <div className="text-2xl font-extrabold max-[500px]:text-4xl max-[500px]:font-extrabold " style={{color:"#ECDFCC"}}>Welcome {expences.username}</div>
        <button
          className="text-white font-bold py-2 px-4 max-[400px]:py-1 max-[400px]:px-2  bg-emerald-700 hover:bg-emerald-800"
          onClick={handleClick}
        >
          Add Expences &#8377;
        </button>
        <div className="max-[360px]:flex max-[360px]:flex-col max-[360px]:gap-2">
          <input
            type="number"
            placeholder="Budget"
            className="py-2 px-4 mr-2 max-[400px]:py-1 max-[400px]:px-2  focus:outline-emerald-300"
            value={bud}
            onChange={(e)=>setbud(e.target.value)}
          />
          <button className="text-white font-bold py-2 px-4 max-[400px]:py-1 max-[400px]:px-2 bg-emerald-700 hover:bg-emerald-800" onClick={()=>expences.setBudget(bud)}>
            Add Budget &#8377;
          </button>
        </div>
        <div className="h-[50px] w-[50px] bg-emerald-700 rounded-full profile"></div>
      </nav>
      <div>{expences.showContent && <Userinput />}</div>
    </div>
  );
}

export default Navbar;
