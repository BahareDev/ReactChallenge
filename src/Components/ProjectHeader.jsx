import React from "react";

function ProjectHeader({ onFilter }) {
  return (
    <div className="border border-gray-200 w-full h-[100px] my-4 rounded flex justify-between items-center p-4">
      <h2>لیست پروژه ها</h2>

      <div className="flex items-center">
        <p>وضعیت</p>
        <FilterStaus onFilter={onFilter}></FilterStaus>
      </div>

      <div className="bg-yellow-50"></div>
      <div className="bg-yellow-50"></div>
    </div>
  );
}

function FilterStaus({ onFilter }) {
  function handleTarget(e) {
    onFilter(e.target.value);
  }

  return (
    <div className="border rounded-lg bg-white inline-flex overflow-hidden p-1 mr-2">
      <label htmlFor="all" className="cursor-pointer">
        <input
          type="radio"
          id="all"
          name="status"
          value="all"
          defaultChecked
          className="peer sr-only"
          onChange={handleTarget}
        />
        <span className="rounded-lg  relative inline-flex  items-center text-sm px-4 py-2 peer-checked:bg-blue-500 peer-checked:text-white">
          <span>همه</span>
        </span>
      </label>

      <label htmlFor="close" className="cursor-pointer">
        <input
          type="radio"
          id="close"
          name="status"
          value="CLOSED"
          className="peer sr-only "
          onChange={handleTarget}
        />
        <span className=" rounded-lg relative inline-flex items-center justify-center text-sm px-4 py-2 peer-checked:bg-blue-500 peer-checked:text-white">
          <span>بسته</span>
        </span>
      </label>

      <label htmlFor="open" className="cursor-pointer">
        <input
          type="radio"
          id="open"
          name="status"
          value="OPEN"
          className="peer sr-only "
          onChange={handleTarget}
        />
        <span className="rounded-lg  relative inline-flex  items-center text-sm px-5 py-2 peer-checked:bg-blue-500 peer-checked:text-white">
          <span>باز</span>
        </span>
      </label>
    </div>
  );
}

export default ProjectHeader;
