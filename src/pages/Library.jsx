import { ArticalCard } from "@/components/cards/ArticalCard";
import { BooksCard } from "@/components/cards/BooksCard";
import { ProposalCard } from "@/components/cards/ProposalCard";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";

const Library = () => {
  return (
    <>
      {/* <aside className="fixed left-0 top-[132px] bottom-0 w-[275px] bg-library_aside py-10 px-2 text-center hidden xl:flex flex-col gap-3 ">
        <h2 className="text-3xl text-white ">Library Directory</h2>
        <div className="relative">
          {" "}
          <Textarea placeholder="Search CID, Keyword or Author..." />{" "}
          <img
            src="/icons/report-search.svg"
            className="absolute right-1 top-1"
          />
        </div>
        <Button className="bg-[#46BF7E]" size="lg">
          <img src="/icons/filter.svg" />
          Filter
        </Button>
        <Button className="bg-[#8B81FF]" size="lg">
          <img src="/icons/input-search.png" />
          Search
        </Button>
        <div className="flex gap-7 items-center text-white">
          <span className="block border-b flex-grow" />
          or <span className="block border-b  flex-grow" />
        </div>
        <Button className="bg-[#FF596D]" size="lg">
          <img src="/icons/upload.svg" />
          Add To Shelf
        </Button>
        <Button variant="gradient" size="lg">
          Digital Library Card <img src="/icons/globe.svg" />
        </Button>
        <img
          src="/images/Library_Animal.png"
          className="relative right-[-50px]"
        />
      </aside> */}
      {/* <main className="bg-library bg-fixed  min-h-[calc(100vh-133px)] bg-cover bg-left-top xl:ml-[275px]"> */}
      <main className="bg-library bg-fixed  bg-cover bg-left-top">
        <div className="bg-primary-background-700 py-9">
          {" "}
          <section className="container">
            <h1 className="text-2xl">Latest DAO Proposals</h1>
            <div className="flex gap-3 overflow-x-auto my-12 pb-1">
              {[1, 2, 3, 4, 5, 6, 7].map((data, i) => (
                <ProposalCard key={"proposal_card" + data + "" + i} />
              ))}
            </div>
          </section>
          <section className="container">
            <h3 className="text-xs">FEATURED ARTICLES</h3>
            <h2 className="text-2xl md:text-4xl">
              Check out this month’s new articles.
            </h2>
            <div className="flex gap-3 overflow-x-auto mb-12 mt-3 pb-1">
              {[1, 2, 3, 4, 5, 6, 7].map((data, i) => (
                <ArticalCard key={"proposal_card" + data + "" + i} />
              ))}
            </div>
          </section>
          <section className="container">
            <h3 className="text-xs">FEATURED LIBRARY BOOKS</h3>
            <h2 className="text-2xl md:text-4xl">Check out a library book.</h2>
            <div className="flex gap-3 overflow-x-auto mb-12 mt-3 pb-1">
              {[1, 2, 3, 4, 5, 6, 7].map((data, i) => (
                <BooksCard key={"proposal_card" + data + "" + i} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Library;
