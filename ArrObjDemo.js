import React, { Component } from "react";
class ArrObjDemo extends Component {
    render() {
        const studentList = [
            { name: "Robin", branch: "AIML", gradYear: 2025 },
            { name: "Prashanth", branch: "CIC", gradYear: 2025 },
            { name: "Bhargav", branch: "CSE", gradYear: 2025 },
            { name: "Abdul", branch: "IT", gradYear: 2025 },
        ];
        const renderStudentList = studentList.map((student) => (
            <tr key={student.name}>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.gradYear}</td>
            </tr>
        ));
        return (
            <div>
                <h1>Displaying the Array Objects in a Table</h1>
                <table border={1}>{renderStudentList}</table>
            </div>
        );
    }
}
export default ArrObjDemo;
