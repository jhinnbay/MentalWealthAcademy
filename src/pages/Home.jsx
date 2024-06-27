// import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="bg-background mx-8 md:mx-14 lg:mx-28 mb-10">
      <div
        className="h-[400px] flex justify-between items-center mt-5 bg-cover bg-center px-14 lg:px-20 rounded-md"
        style={{ backgroundImage: "url('/images/carousel_background.png')" }}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="ml-auto h-[300px] px-8 py-7 w-full max-w-[700px] bg-[#8B81FF]">
                  <h2 className="text-3xl font-bold">
                    Empower Your Learning Journey
                  </h2>
                  <ul className="mt-4 list-disc text-xl pl-4 space-y-2">
                    <li>Access a wealth of free courses and e-books</li>
                    <li>Learn at your own pace with flexible options</li>
                    <li>Connect with a community of learners</li>
                    <li>
                      Earn while you learn through our play-to-earn economy
                    </li>
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div>
        <h2 className="mt-5 text-[42px] font-bold">
          The People’s University: Education on Your Terms
        </h2>
        <p className="mt-6 text-2xl">
          Choose from the best open-source information and tools to learn and
          connect with friends.
          <br /> No more wondering what to build or where to find your next step
          forward.
        </p>
      </div>
      <div className="mt-12">
        <Tabs defaultValue="books" className="w-full relative">
          <TabsList>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="proposal">Proposal</TabsTrigger>
            <TabsTrigger value="grants">Grants</TabsTrigger>
          </TabsList>
          <TabsContent value="books">
            <h2 className="text-xl font-bold">
              Expand Your Education Opportunities Without The High Costs
            </h2>
            <p className="mt-4 w-full max-w-2xl">
              Blockchain and smart contracts revolutionize education by giving
              individuals control over their learning and finances. Blockchain
              securely stores educational records, eliminating the need for
              centralized institutions. Smart contracts ensure transparent,
              automated transactions, directly allocating funds to students and
              educators. This decentralized approach reduces costs and creates a
              more equitable, accessible educational system.
            </p>
          </TabsContent>
          <TabsContent value="articles">
            <h2 className="text-xl font-bold">
              Expand Your Education Opportunities Without The High Costs
            </h2>
            <p className="mt-4 w-full max-w-2xl">
              Blockchain and smart contracts revolutionize education by giving
              individuals control over their learning and finances. Blockchain
              securely stores educational records, eliminating the need for
              centralized institutions. Smart contracts ensure transparent,
              automated transactions, directly allocating funds to students and
              educators. This decentralized approach reduces costs and creates a
              more equitable, accessible educational system.
            </p>
          </TabsContent>
          <div className="absolute bottom-0 right-0">
            <img src="/images/Home_Animal.png" alt='Home_Animal' />
          </div>
        </Tabs>
      </div>
    </main>
  );
}
