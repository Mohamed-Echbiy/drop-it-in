import React, { FC } from "react";
import { collections } from "./Layout";

const Table: FC<{ rightCollection: collections[] }> = ({ rightCollection }) => {
  return (
    <div className='overflow-x-auto w-full mt-8 max-w-[520px] bg-white z-[2] p-8 rounded'>
      <h3 className='text-2xl text-center capitalize pb-2 mb-4 border-b max-w-fit mx-auto border-blue-600'>
        the Right Area Table
      </h3>
      <table className='table w-full'>
        {/* head */}
        <thead className='text-start mb-2'>
          <tr className=' capitalize'>
            <th className='px-1 py-2'></th>
            <th className='text-start py-2'>Id</th>
            <th className='text-center py-2'>component</th>
            <th className='text-start py-2'>Value</th>
          </tr>
        </thead>
        <tbody>
          {rightCollection.map((data, i) => (
            <tr>
              <th className='p-3'>{i + 1}</th>
              <td>{data.id}</td>
              <td className='flex justify-center capitalize'>
                {data.component.props.text ||
                  data.component.props.value ||
                  data.component}
              </td>
              <td>{data.component.props.value || "none"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
