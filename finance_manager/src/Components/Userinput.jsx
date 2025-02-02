import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useUserContext } from "../Context";

function Userinput() {
  const expences = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
 const [Amount, setAmount] = useState("")
 
  return (
    <div className="h-[100vh] absolute w-[100%] grid  place-items-center bg-black bg-opacity-80 z-10">
    <div className=" flex flex-col w-[30vw] gap-2 p-4 max-[770px]:w-[80vw]" style={{backgroundColor:"#697565"}}>
      <div
        className="self-end cursor-pointer text-emerald-950"
        onClick={() => {
          expences.setContent(false);
        }}
      >
        <ImCross />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fullData = {
            "Title": title,
            "Description":description,
            "Category":category,
            "Amount": Amount
          }
            expences.setexpences([...expences.Expences,fullData]);
            setTitle("")
            setDescription("")
            setCategory("")
            expences.setContent(false)
        }
    }
    className="flex flex-col"
      >
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          className="py-1 px-2 mb-2 focus:outline-emerald-300"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          className="py-1 px-2 mb-2 focus:outline-emerald-300"
          value={Amount}
          onChange={(e)=>setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="py-1 px-2 mb-2 focus:outline-emerald-300"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <select
          name="categories"
          id="cat"
          className="py-1 px-2 mb-2 focus:outline-emerald-300  hover:bg-emerald-900  hover:text-white  "
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >
          <option>Select Categories</option>
          <option value="Personal" id="cat">
            Personal
          </option>
          <option value="Food" id="cat">
            Food
          </option>
          <option value="Housing/Travel" id="cat">
            Housing/Travel
          </option>
          <option value="Entertainment" id="cat">
            Entertainment
          </option>
          <option value="Other" id="cat">
            Other
          </option>
        </select>
        <input
          type="submit"
          value="Add Expense"
          className="w-full bg-emerald-700 py-1 px-2 cursor-pointer font-bold text-white hover:bg-emerald-800"
        />
      </form>
    </div>
    </div>
  );
}

export default Userinput;
