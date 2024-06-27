import { Button } from "../ui/button";

export const ProposalCard = () => {
  return (
    <div className="flex flex-shrink-0 flex-col gap-2 bg-proposal justify-between border-2 border-solid border-primary-foreground w-[288px] max-w-full p-2 rounded-lg">
      {/* card body  */}
      <div className="mb-3">
        <div className="relative flex gap-6 px-2">
          <img
            src="/images/proposal_placeholder.png"
            className="rounded-full h-14 w-14 aspect-square object-cover"
          />
          <div>
            <h3 className="text-sm font-bold">Proposal title</h3>
            <h5 className="text-2xs  font-bol">Created by: 0x02Fxvs7sd</h5>
          </div>
          <img
            src="/icons/info-square.svg"
            className="absolute right-1 top-1"
          />
        </div>
        <span className="block w-full my-4 border border-solid border-primary-foreground "></span>
        <p className="text-2xs ">
          Upload request for the [Book/audiobook/video] called [“$Enter Title
          Here”].
        </p>
      </div>
      {/* card footer  */}
      <div className="flex shrink-0 justify-between gap-2">
        <Button variant="proposal1" className=" flex-grow">
          {" "}
          <img src="/icons/lock-closed.svg" />
          Vote
        </Button>
        <Button variant="proposal2" className="flex-grow gap-2">
          {" "}
          Get Token
        </Button>
      </div>
    </div>
  );
};
