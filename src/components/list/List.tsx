import React, { useEffect, useState } from "react";
import { localDB } from "../../utils/Helper";
import type { DataObj } from "../../utils/Interface";

interface ListProps {
  data: DataObj[];
  setData: React.Dispatch<React.SetStateAction<DataObj[]>>;
}

const List: React.FC<ListProps> = ({ data, setData }) => {

  useEffect(() => {
    let getData: DataObj[] | void = localDB({ localSet: false });
    if (getData) {
      setData(getData);
    }
    // else alert('no data found');
  }, []);

  const handleDelete = (item: DataObj): void => {
    // Filter out the item to be deleted
    const filteredData = data.filter((e: DataObj) => e.id !== item.id);

    // Update localStorage with new array
    localStorage.setItem("todo", JSON.stringify(filteredData));

    // Update state
    setData(filteredData);
  };

  const handleToggle = (item: DataObj): void => {
    // Toggle the status of the clicked item
    const updatedData = data.map((e: DataObj) =>
      e.id === item.id ? { ...e, status: !e.status } : e
    );
    // Update localStorage
    localStorage.setItem("todo", JSON.stringify(updatedData));
    // Update state
    setData(updatedData);
  };

  return (
  <div className="flex_col gap-2">
    {data.length > 0 &&
      [...data].reverse().map((e: DataObj, idx: number) => (
        <div
          key={e.id ?? idx}
          className="bg-white w-full flex flex-row items-center justify-between rounded-sm p-3"
        >
          <input
            type="checkbox"
            className="w-6 h-6 cursor-pointer accent-green-500"
            checked={e.status}
            onChange={() => handleToggle(e)}
          />
          {e.status ? (
            <del>
              <p>{e.input ?? "No title"}</p>
            </del>
          ) : (
            <p>{e.input ?? "No title"}</p>
          )}
          <button
            className="bg-red-400 text-white px-[15px] py-[5px] rounded-full cursor-pointer "
            onClick={() => handleDelete(e)}
          >
            বাদ দিন
          </button>
        </div>
      ))}
  </div>
);
};

export default List;
