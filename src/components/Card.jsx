import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Card = ({ data , reference }) => {
  return (
    <motion.div drag dragConstraints={reference} 
    whileDrag={{scale: 1.1}}
    dragElastic={0.1}
    dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight font-semibold mt-5">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-5">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
          {data.close ? <IoCloseSharp size=".7em" color="#fff"/> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
        )}   
    </div>
    </motion.div>
  );
};

export default Card;
