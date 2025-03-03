import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

const TaskTable = ({ tasks, markTaskCompleted, pagination, setPagination }) => {
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      accessorKey: 'name',
      header: 'Task Name',
      enableSorting: true,
    },
    {
      accessorKey: 'isCompleted',
      header: 'Status',
      cell: (info) => (info.getValue() ? 'Completed' : 'Incomplete'),
      enableSorting: true,
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: (info) => new Date(info.getValue()).toLocaleString(),
      enableSorting: true,
      className: 'hidden md:table-cell',
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: (info) => (
        <button
          onClick={() => markTaskCompleted(info.row.original.id)}
          disabled={info.row.original.isCompleted}
          className={`py-1 px-4 rounded-lg focus:outline-none focus:ring-2 ${
            info.row.original.isCompleted
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
          }`}
        >
          {info.row.original.isCompleted ? 'Completed' : 'Complete'}
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: tasks,
    columns,
    state: {
      sorting,
      pagination,
    },
    manualPagination: false,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: false,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <table className="w-full table-fixed">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-2 text-left bg-gray-100 text-sm md:text-base">
                    <div
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
      </div>
      <div className="overflow-y-auto flex-grow">
        <table className="w-full table-fixed">
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 text-sm md:text-base">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="bg-white sticky bottom-0 z-10 shadow-md p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm">Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="p-1 border rounded-lg text-sm"
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-1 md:p-2 bg-blue-500 text-white rounded-lg text-sm disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-1 md:p-2 bg-blue-500 text-white rounded-lg text-sm disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;