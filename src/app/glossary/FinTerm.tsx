import React from 'react'

export default function FinTerm() {
  return (
    <div>
      <div className="p-8 rounded-xl shadow-lg max-w-[400px]">
        <h2 className="font-bold text-2xl text-deepBlue">
          Financial Terminology
        </h2>
        <label htmlFor="term" className=" mt-2 ml-4 block text-dBlack text-1.5xl font-bold text-left">
          Term
        </label>
        <select
          id="term"
          className="mt-2 w-full ml-4 rounded-full p-2 border-solid border-2 border-dBlack text-lgBlack "
        >
          <option value="income" selected>
            Income
          </option>

          <option value="expenses">Expenses</option>
        </select>
      </div>
    </div>
  );
}
