import React from "react";
import { useUserContext } from "../Context";
import { list } from "postcss";

function Main() {
  const expences = useUserContext();
  let totalExpences = expences.Expences.reduce(
    (acc, e) => acc + Number(e.Amount),
    0
  );

  return (
    <main className="flex justify-around items-center h-[90vh]  bg-slate-300 border border-b-2 border-black ">
      <div className="border border-black bg-green-300 w-[70%] h-[70%] flex justify-center">
        <ul>
          {expences.Expences.map((obj) => (
            <li>
              <div className="bg-slate-100 w-[50vw] m-2 text-center">
                <h1 className="font-extrabold text-xl">{obj.Title}</h1>
                <p>{obj.Description}</p>
                <h2>{obj.Amount}</h2>
                <div>{obj.Category}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {expences.Budget ? (
          <h1 className="bg-green-300 border border-black rounded text-center font-semibold m-1 p-1">
            your budget is: {expences.Budget}
          </h1>
        ) : (
          <h1 className="bg-green-300 border border-black rounded text-center font-semibold m-1 p-1">
            You Dont Have Any Budget
          </h1>
        )}
        <div className="bg-green-300 border border-black rounded text-center font-semibold m-1 p-1">
          {" "}
          total expenses are: {totalExpences}
        </div>
        {totalExpences <= expences.Budget ? (
          <h1 className="bg-green-300 border border-black rounded text-center font-semibold m-1 p-1">
            you are under the budget
          </h1>
        ) : (
          <h1 className="bg-green-300 border border-black rounded text-center font-semibold m-1 p-1">
            {" "}
            you are out of budget {alert("you are out of budget")}
          </h1>
        )}
      </div>
    </main>
  );
}

export default Main;
