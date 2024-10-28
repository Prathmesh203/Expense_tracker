import React from "react";
import { useUserContext } from "../Context";
import '../App.css'

function Main() {
  const expences = useUserContext();
  let totalExpences = expences.Expences.reduce(
    (acc, e) => acc + Number(e.Amount),
    0
  );

  return (
    <main className="flex flex-col items-center gap-4 py-20" style={{backgroundColor:"#1E201E",maxHeight:"fit-content"}}>
      <div className="h-[80%] w-[80%] ">
        <ul className="grid grid-cols-3 gap-4 max-[770px]:grid-cols-2 max-[500px]:grid-cols-1">
          {expences.Expences.map((obj) => (
            <li>
              <div className="py-12 flex flex-col items-center justify-center rounded-md  cursor-pointer hover:scale-[1.05] transition-transform bg-teal-950 text-center">
                <h1 className="text-4xl font-bold text-white">{obj.Title}</h1>
                <p className="text-xl font-semibold text-emerald-500">{obj.Description}</p>
                <h2 className="text-2xl font-bold text-emerald-600">&#8377; {Math.floor(obj.Amount)}</h2>
                <div className="text-xl font-semibold text-emerald-700"><i class="fa-solid fa-tags"></i>  {obj.Category}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        {expences.Budget ? (
          <h1 className="text-2xl text-emerald-400 font-bold">
            Your budget is: &#8377; {expences.Budget}
          </h1>
        ) : (
          <h1 className="text-2xl text-emerald-400 font-bold">
            You Dont Have Any Budget
          </h1>
        )}
        <div className="text-xl text-emerald-600 font-semibold">
          {" "}
          Your Total Expenses are: &#8377; {Math.floor(totalExpences)}
        </div>
        <div className="text-l text-emerald-700 font-semibold">
          {" "}
          Remaining Amount: &#8377; {Math.floor(expences.Budget-totalExpences)}
        </div>
      </div>
    </main>
  );
}

export default Main;
