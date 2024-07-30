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
    <div className="border border-black rounded  w-[30vw] flex flex-col  bg-slate-300 max-[600px]:w-[65vw] ">
      <div
        className="border w-[25px] h-[25px] relative left-[100.5%]  hover:bg-black  hover:text-white flex items-center justify-center"
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
      >
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          className="border border-black rounded m-1"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          className="border border-black rounded m-1"
          value={Amount}
          onChange={(e)=>setAmount(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border border-black rounded m-1"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <select
          name="categories"
          id="cat"
          className="border border-black rounded m-1  hover:bg-black  hover:text-white  "
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
          className="border border-black rounded hover:bg-slate-500 ml-5 "
        />
      </form>
    </div>
  );
}

export default Userinput;
