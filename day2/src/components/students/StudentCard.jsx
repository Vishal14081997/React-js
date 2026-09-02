//---------------- 1st ---------------

// const StudentCard = ({ name, age, rollNo, studentClass,onDelete }) => {
//   return (
//     <div className="bg-black text-white p-5 rounded-2xl ">
//       <div>{name}</div>
//       <div>Age: {age}</div>
//       <div>RollNo: {rollNo}</div>
//       <div>class: {studentClass}</div>
//       <div className="flex justify-center">
//         <button 
//         onClick={onDelete}
//         className="bg-red-700 px-4  py-2 mt-4 rounded-2xl ">
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };
// export default StudentCard;

//------------------- 2nd --------------------

// import React from "react";
// import StudentInfo from "./StudentInfo";

// const StudentCard = ({ student, onDelete }) => {
//   // console.log(student);
  
//   return (
//     <div className="bg-black text-white p-5 rounded-2xl">

//       <StudentInfo
//         name={student.name}
//         age={student.age}
//         rollNo={student.rollNo}
//         studentClass={student.class}
//       />

//       <div className="flex justify-center">

//         <button
//           onClick={() => onDelete(student.id)}
//           className="bg-red-700 px-4 py-2 mt-4 rounded-2xl"
//         >
//           Delete
//         </button>

//       </div>

//     </div>
//   );
// };

// export default StudentCard;