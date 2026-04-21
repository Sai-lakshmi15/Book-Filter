import React from "react";
import BookCard from "./bookCard";
import { AiBubbleProps } from "@/types/types";

const AiBubble: React.FC<AiBubbleProps> = ({
  reply,
  books,
  suggestions,
}) => {
  return (
    <div className="w-[75%] p-5 border-2 border-black rounded-r-lg rounded-tl-lg">
      <p>{reply}</p>
      <hr />
      <div className="flex flex-col gap-5">
        {books.map((book) => (
          <BookCard key={book.isbn} {...book} />
        ))}
      </div>
      <hr />
      <p className="flex gap-5">
        {
           suggestions.map((suggestion,i) => (
            <span key={i} className="bg-black px-3 rounded-full">{suggestion}</span>
           ))
        }
      </p>
    </div>
  );
};

export default AiBubble;
