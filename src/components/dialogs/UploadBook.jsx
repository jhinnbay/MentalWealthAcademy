import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

export const UploadBook = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black text-white font-medium p-4 gap-2 rounded-2xl justify-center items-center">
          Upload Your Work <img src="/icons/sparkles.svg" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" border border-solid border-black max-w-[867px] w-full p-8">
        <div className="grid grid-cols-5 gap-9">
          <div className="col-span-3">
            <h3 className="text-3xl font-bold">Upload To Marketplace</h3>
            <p className="font-spaceGrotesk">
              <span className="font-bold"> Step 1:</span> Upload any Short
              Story, Manga, Comic, Book, Article, Poem, Etc. Then Click Upload
              To Marketplace
              <br /> <span className="font-bold"> Step 2:</span> Content is sent
              to the DAO for community review, ethical checks, AI work, or
              plagarism.
              <br />
              <span className="font-bold"> Step 3:</span> Content is added to
              the Marketplace and available for sale or purchase.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Title"
                className="bg-[#A9A9A9CC] rounded-lg placeholder:text-black"
              />
              <Input
                placeholder="Author"
                className="bg-[#A9A9A9CC] rounded-lg placeholder:text-black"
              />
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 bg-[#A9A9A9CC] rounded-lg px-4 flex items-center">
                  Number of Copies
                </div>
                <div className="border grid grid-cols-2 rounded-lg overflow-hidden">
                  <Input
                    placeholder="0"
                    type="number"
                    className="border-0 col-span-2"
                  />
                  <Button className="rounded-none bg-[#A9A9A9CC] p-3 border-0 border-r border-[#3C3C434D]">
                    <img src="/icons/Decrement.png" />
                  </Button>
                  <Button className="rounded-none bg-[#A9A9A9CC] p-3 border-0">
                    <img src="/icons/Increment.png" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="text-3xl font-medium"> Cover Art</h3>
            <Label className="h-full relative cursor-pointer border-dashed border p-5 gap-2 items-center flex flex-col text-white border-white rounded-2xl bg-black">
              <Input
                type="file"
                className="w-full top-0 left-0 h-full absolute z-10 opacity-0 cursor-pointer "
              />
              <img src="/icons/cloud-upload.svg" />
              <span>Drag and drop a file to upload</span>
              <span className="text-[#6B7280]">
                .PDF, .EPUB, .MP3, .AAC, .MP4 up to 1GB
              </span>
              <Button className="mt-auto bg-[#E1E1FE]"> Browse Files</Button>
            </Label>
          </div>
        </div>
        <Textarea
          placeholder="Description"
          className="bg-[#A9A9A9CC] rounded-lg placeholder:text-black"
        />
        <DialogFooter>
          <Button className="bg-black w-full text-white font-medium p-4 gap-2 rounded-2xl justify-center items-center">
            Upload To Marketplace <img src="/icons/sparkles.svg" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
