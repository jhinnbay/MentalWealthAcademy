import { Button } from "../ui/button";

export const LibraryCard = () => {
  return (
    <div className="p-5 h-full flex text-center flex-shrink-0 flex-col gap-2 justify-between w-[288px] max-w-full  hover:bg-white/50 duration-300 rounded-lg">
      <img
        src="/images/books_placeholder.png"
        className="max-h-[281px] shadow-default "
      />
      <h4 className=" font-bold">Read, Write, Own</h4>
      <h5>Jhinn bay</h5>
      <Button className="bg-black_grad text-white">
        <img
          src="/public/icons/sparkles.svg"
          style={{
            filter:
              " brightness(0) saturate(100%) invert(78%) sepia(90%) saturate(1124%) hue-rotate(323deg) brightness(100%) contrast(102%)",
          }}
        />{" "}
        Mint A Copy
      </Button>
    </div>
  );
};
