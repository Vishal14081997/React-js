
// ----------- 2nd-------------

import StudentCard from "./StudentCard";
const StudentList = ({ students, onDelete }) => {
  return (
    <div className="flex gap-10">
      {
        students.map((student) => {

          return (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          );

        })
      }

    </div>
  );
};

export default StudentList;