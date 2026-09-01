import React from "react";

const StudentCard = ({ name, age, rollNo, studentClass,onDelete }) => {
  return (
    <div className="bg-black text-white p-5 rounded-2xl ">
      <div>{name}</div>
      <div>Age: {age}</div>
      <div>RollNo: {rollNo}</div>
      <div>class: {studentClass}</div>
      <div className="flex justify-center">
        <button 
        onClick={onDelete}
        className="bg-red-700 px-4  py-2 mt-4 rounded-2xl ">
          Delete
        </button>
      </div>
    </div>
  );
};
export default StudentCard;
