import React from "react";

const List: React.FC = () => {
  return (
    <>
      <div className="flex_col gap-2">
        
        <div className="bg-white w-full flex flex-row items-center justify-between rounded-sm p-3">
          <input type="checkbox" className="w-6" />
          <p>মাছ ধরা</p>
          <button className="bg-red-400 text-white px-[15px] py-[5px] rounded-full">
            বাদ দিন
          </button>
        </div>

     

      </div>
    </>
  );
};

export default List;
