import { UploadBook } from "@/components/dialogs/UploadBook";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const RequestForBook = ({ handleFileChange, handleFileUpload }) => {
  return (
    <section className="flex flex-col gap-3 text-center container max-w-[629px]">
      <h2 className="text-2xl md:text-3xl font-bold">
        Request Your Book in Seconds!
      </h2>
      <p
        className="max-w-[508px] mx-auto my-3 "
        style={{ letterSpacing: "1.12px" }}
      >
        1. 📚 Enter book details: title, edition, author <br />
        2.🖱️ Hit &quot;Request&quot;
        <br /> 3. 🤝 Our DAO members review and fund your need Your book, our
        community support!
      </p>
      <div className="relative">
        {" "}
        <Textarea
          placeholder="Search CID, Keyword or Author..."
          className="border-2 border-solid border-black "
        />{" "}
        <img
          src="/icons/report-search.svg"
          className="absolute right-1 top-1"
        />
      </div>
      <Button className="bg-black_grad text-white" size="lg">
        <img
          src="/icons/input-search.png"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(95%) sepia(100%) saturate(14%) hue-rotate(213deg) brightness(104%) contrast(104%)",
          }}
        />
        Request A Book
      </Button>

      <div className="flex gap-7 items-center text-black">
        <span className="block border-b border-black flex-grow" />
        or <span className="block border-b  border-black flex-grow" />
      </div>

      <UploadBook />
      <Button variant="gradient" size="lg">
        Digital Library Card <img src="/icons/globe.svg" />
      </Button>
    </section>
  );
};
