import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { LuGrip } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';

interface Column {
  key: string;
  header: string;
  render: (row: any) => React.ReactNode;
}

interface ReorderableTableProps {
  columns: Column[];
  data: any[];
  onReorder: (startIndex: number, endIndex: number) => void;
  onRemove?: (id: string) => void;
}

const ReorderableTable: React.FC<ReorderableTableProps> = ({ columns, data, onReorder, onRemove }) => {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    onReorder(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="table">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="overflow-x-auto">
            <table className="border-collapse w-full">
              <thead>
                <tr className="bg-gray-100">
                  {/* Add a column for the drag handle */}
                  <th></th>
                  {columns.map((column) => (
                    <th key={column.key} className="p-3 text-center">
                      {column.header}
                    </th>
                  ))}
                  {onRemove && <th className="p-3 text-center">Actions</th>}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <Draggable key={row.id} draggableId={row.id} index={index}>
                    {(provided) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="border-b hover:bg-gray-50 text-center"
                      >
                        {/* Drag handle cell */}
                        <td
                          {...provided.dragHandleProps}
                          className="p-3 cursor-grab hover:cursor-grabbing"
                          >
                          <LuGrip className="text-gray-500" />
                        </td>
                        {/* Render other columns */}
                        {columns.map((column) => (
                          <td key={column.key} className="p-3">
                            {column.render(row)}
                          </td>
                        ))}
                        {/* Remove button */}
                        {onRemove && (
                          <td className="p-3">
                            <button
                              onClick={() => onRemove(row.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <MdDelete size={20} />
                            </button>
                          </td>
                        )}
                      </tr>
                    )}
                  </Draggable>
                ))}
              </tbody>
            </table>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ReorderableTable;
