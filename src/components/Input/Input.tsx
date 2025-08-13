import React, { useState } from "react";
import { localDB } from "../../utils/Helper";
import type { DataObj } from "../../utils/Interface";


const Input: React.FC = () => {

  const [text, setText] = useState<string>("");

  const handelAdd = () => {
    if (!text) return;
    const makeData: DataObj = {
      input: text,
      id: Date.now(),
      status: false,
    };
    localDB({ localSet: true, data: makeData });
    setText(""); 
  }

  return (
    <div className="flex_col">
      <div className="flex_row gap-2">
        <input
          type="text"
          placeholder="লক্ষ লিখো..."
          className=" focus:outline-none border-2 text-[18px] font-bold p-1 rounded-md indent-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          value={text}
        />

        <button className="cursor-pointer px-[30px] py-[8px] rounded-md font-semibold text-white bg-green-400"
        onClick={handelAdd}>
          নতুন লক্ষ
        </button>
      </div>
    </div>
  );
};

export default Input;
