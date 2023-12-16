import React from "react";
import data from "../jsondata/TableList.json";
const TableList = () => {
  return (
    <div className="container d-flex justify-center">
      <table>
        <thead>
          <tr>
            <td>Sprint Name</td>
            <td>Status</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Completed Date</td>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value["Sprint Name"]}</td>
              <td>{value.Status}</td>
              <td>{value["Start Date"]}</td>
              <td>{value["End Date"]}</td>
              <td>{value["Completed Date"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
