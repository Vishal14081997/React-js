// ------- 2nd ------------------------

const StudentInfo = ({ name, age, rollNo, studentClass }) => {
    return (
        <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Roll No: {rollNo}</div>
            <div>Class: {studentClass}</div>
        </div>
    );
};

export default StudentInfo;