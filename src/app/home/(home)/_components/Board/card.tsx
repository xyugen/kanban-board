import { FC } from "react";
import DropIndicator from "./drop-indicator";
import { motion } from "framer-motion";
interface CardProps {
  title: string;
  id: string;
  column: string;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    card: { title: string; id: string; column: string }
  ) => void;
}

const TaskCard: FC<CardProps> = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })} 
        className="cursor-grab rounded border dark:border-neutral-700 dark:bg-neutral-800 p-3 active:cursor-grabbing
         border-gray-100 shadow
        "
      >
        <p className="text-sm dark:text-neutral-100 text-neutral-950">{title}</p>
      </motion.div>
    </>
  );
};

export default TaskCard;