import React from "react";
import { Table } from "flowbite-react";

const MyTable = ({ columnHeadings, rowEntries }) => {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          {columnHeadings.map((heading, index) => (
            <Table.HeadCell key={index}>{heading}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {rowEntries.map((row, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {row.map((cell, index) => (
                <Table.Cell key={index}>{cell}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyTable;
