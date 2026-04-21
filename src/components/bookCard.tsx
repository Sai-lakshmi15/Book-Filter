import { BookCardProps } from "@/types/types";
import Image from "next/image";

const BookCard: React.FC<BookCardProps> = ({
  isbn,
  title,
  description,
  author,
  releaseYear,
  genre,
  percentageFit,
  cover,
}) => {
  return (
    <div className="w-[50%] h-40 rounded-md border-2 border-black flex gap-5 px-3 py-2 overflow-hidden">
      <div className="relative aspect-2/3">
        <Image src={cover} alt={title} fill className="object-contain" />
      </div>
      <div className="flex-1 flex flex-col gap-1 overflow-y-auto h-full">
        <div className="flex gap-5">
          <p className="text-lg font-bold">{title}</p>
          <p className="border-3 border-black rounded-full px-3 text-semibold text-md">
            {percentageFit}% match!
          </p>
        </div>

        <p className="text-sm font-semibold">
          {author}&nbsp;•&nbsp;{releaseYear}
        </p>
        <p className="pb-2">{description}</p>
        <p className="flex gap-2">
          {genre.map((g, i) => (
            <>
              <span
                key={i}
                className="bg-black text-white px-3 rounded-full text-xs text-semibold"
              >
                {g}
              </span>
            </>
          ))}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
