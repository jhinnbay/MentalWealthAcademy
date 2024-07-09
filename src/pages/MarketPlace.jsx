import { AuthorCard } from "@/components/cards/AuthorCard";
import { HotSellerCard } from "@/components/cards/HotSellerCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { ethers } from "ethers";
import BookABI from "../../ABI/BookABI.json";
import { Buffer } from "buffer";
import { UploadBook } from "@/components/dialogs/UploadBook";

window.Buffer = Buffer;

const filterTabs = [
  { label: "all", icon: "" },
  { label: "Articles", icon: "articles.png" },
  { label: "Magazines", icon: "comic.png" },
  { label: "Anime & Manga", icon: "animeBook.png" },
  { label: "Collectibles", icon: "sketchbook.png" },
];

const hotSeller = [
  {
    title: "EmberQuill Magazine",
    img: "/images/marketCardPlaceholder1.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "@gabriel.eth",
  },
  {
    title: "The Last War",
    img: "/images/marketCardPlaceholder2.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "@thelastwar.eth",
  },
  {
    title: "Head First",
    img: "/images/marketCardPlaceholder3.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "Anonymous",
  },
  {
    title: "EmberQuill Magazine",
    img: "/images/marketCardPlaceholder1.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "@gabriel.eth",
  },
  {
    title: "The Last War",
    img: "/images/marketCardPlaceholder2.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "@thelastwar.eth",
  },
  {
    title: "Head First",
    img: "/images/marketCardPlaceholder3.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "Anonymous",
  },
  {
    title: "The Last War",
    img: "/images/marketCardPlaceholder2.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "@thelastwar.eth",
  },
  {
    title: "Head First",
    img: "/images/marketCardPlaceholder3.png",
    description:
      "Artwork by Jinzu Bei, Writing by Christopher Dow, Edits by TT. Haling ",
    price: "0.001 ETH",
    credit: "Anonymous",
  },
];

const author = [
  {
    title: "Jhinnbay #24",
    image: "/images/author1.png",
    description:
      "I'm a multidisciplinary artist exploring the intersections of reality and imagination through my unique neurodivergent lens.",
  },
  {
    title: "Jono #42",
    image: "/images/author2.png",
    description:
      "I'm a multidisciplinary artist exploring the intersections of reality and imagination through my unique neurodivergent lens.",
  },
  {
    title: "Princess #24",
    image: "/images/author3.png",
    description:
      "I'm a multidisciplinary artist exploring the intersections of reality and imagination through my unique neurodivergent lens.",
  },
];

const MarketPlace = () => {
  const {} = usePrivy();
  const { wallets } = useWallets();
  const connectedWallet =
    wallets && wallets?.length && wallets?.length > 0 ? wallets[0] : null;

  const mint = async () => {
    if (!connectedWallet) {
      return alert("Please connect your wallet to mint");
    }
    const provider123 = await connectedWallet.getEthersProvider();
    const a = await provider123.getNetwork();
    if (a !== 84532) {
      await provider123.send("wallet_switchEthereumChain", [
        { chainId: "0x14a34" },
      ]);
    }

    // AbstractProvider
    const provider = await connectedWallet.getWeb3jsProvider();
    console.log(
      await provider.request({
        method: "eth_chainId",
        params: [],
      })
    );

    const contract = new ethers.Contract(
      "0x23Af6993e4faA987786f090ecAB7BdaB576e2A32",
      BookABI,
      provider123
    );

    // Create the transaction object
    const tx = {
      to: contract.address, // The address of the contract
      from: connectedWallet.address, // The address sending the transaction
      data: contract.interface.encodeFunctionData("mint", []), // Encoded contract function call
      value: ethers.utils.parseEther("0.001").toHexString(), // Convert value to hex string
    };

    // Send the transaction
    const txResponse = await provider.request({
      method: "eth_sendTransaction",
      params: [tx],
    });

    // send mint transaction with abstractprovider

    // const wallet = provider.getSigner()
    // const a = await wallet.getBalance()
    // console.log(ethers.utils.formatEther(a))
    // //switch chain id

    // const contract = new ethers.Contract('0x23Af6993e4faA987786f090ecAB7BdaB576e2A32', BookABI, provider)
    // const tx = await contract.connect(wallet).mint({
    //   value: ethers.utils.parseEther('0.001').toString()
    // })
    // await tx.wait(1)
    alert("Minted successfully");
  };
  return (
    <main>
      <section className="text-center container my-7  hidden lg:block">
        <h2 className="text-xs">GET PAID FOR YOUR AUTHORSHIP</h2>
        <h1 className="text-7xl">Writer’s Marketplace</h1>
        <h3 className="mt-7 bg-marketPlace_grad   p-[38px] pb-0 text-white text-5xl truncate">
          {" "}
          Discover your next NFT, Sell Your Work, Ethical Verification
        </h3>
      </section>
      <section className="container">
        <div className="grid grid-cols-6 gap-8 container border-t border-[#B4B4B4]">
          <div className="col-span-4">
            <nav className="flex gap-9 py-3 container overflow-x-auto">
              {filterTabs?.map((data, i) => (
                <div
                  key={data?.label + i}
                  className={`flex-shrink-0 flex gap-1 items-center  border-b-2 border-transparent ${
                    i == 0 ? " !border-[#594DE5]" : ""
                  } hover:border-[#594DE5] cursor-pointer duration-300`}
                >
                  {" "}
                  {data?.icon ? (
                    <img src={"/icons/" + data?.icon} />
                  ) : null}{" "}
                  {data?.label}
                </div>
              ))}
            </nav>
            <div className=" py-6 px-10 rounded-2xl">
              <h2 className="lg:text-7xl text-4xl mb-5 font-bold">
                Hottest Sellers 🔥
              </h2>
              <div className="px-4">
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {hotSeller?.map((data, i) => (
                      <CarouselItem
                        key={data?.title + data?.credit + i}
                        className="basis-1/3"
                      >
                        <HotSellerCard
                          description={data?.description}
                          title={data?.title}
                          price={data?.price}
                          poster={data?.img}
                          credit={data?.credit}
                          onClick={() => mint()}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="flex justify-between">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="col-span-2 ">
            <div className="rounded-lg flex flex-col overflow-hidden flex-shrink-0 min-h-[calc(100%-48px)] mt-12">
              <div className=" bg-[#1B1B1B] text-white ">
                <div className="px-6 pt-8 flex">
                  <div className="flex-grow">
                    <h3 className="text-xl">
                      $WEALTH Tokens Power Our Author’s Marketplace
                    </h3>
                    <p className="text-xs">
                      Refer a friend for FREE tokens or join our discord to chat
                      and get your account set up.
                    </p>
                    <div className="flex gap-3 mt-5 mb-7">
                      <Button>
                        <img src="/icons/plusIcon.svg" />
                        Invite Friend
                      </Button>
                      <Button className="bg-[#343434] border border-[#595959] text-[#7A7FED]">
                        Join Discord
                      </Button>
                    </div>
                  </div>
                  <img
                    src="/images/MWA BIG BOY 1.png"
                    className="flex-shrink-0 w-[60px] aspect-square object-contain"
                  />
                </div>
                <div className="border-t border-[#323232] py-3 px-6">
                  <h4 className="flex text-xl gap-3">
                    Onboarding Checklist{" "}
                    <img
                      src="/icons/chevron-down.png"
                      className="object-contain"
                    />
                  </h4>
                </div>
              </div>
              <div className="bg-white flex-grow-1 flex flex-col gap-4 p-6">
                {[
                  "Create A Smart Wallet",
                  "Upload something you’ve written",
                  "Set a price and find your tribe",
                ].map((data, i) => (
                  <div
                    key={data + i}
                    className="flex items-center justify-between bg-[#F4F5FE] rounded-2xl p-5"
                  >
                    <div className="w-[44px] h-[44px] flex justify-center items-center border rounded-full border-[#6A6A6A]">
                      <img src="/icons/credit-card.svg" />
                    </div>
                    <span className="text-2xs">{data}</span>
                    <Button className="h-[53px] w-[129px] rounded-2xl">
                      Start{" "}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="flex justify-between items-center">
          <h2 className="lg:text-7xl text-4xl mb-5 font-bold">
            Writer’s Marketplace
          </h2>
          <UploadBook />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4  pb-2">
          {hotSeller?.map((data, i) => (
            <div
              key={data?.title + data?.credit + i + "marketplace"}
              className="flex-shrink-0   p-4 rounded-lg"
            >
              <HotSellerCard
                description={data?.description}
                title={data?.title}
                price={data?.price}
                poster={data?.img}
                credit={data?.credit}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <h2 className="lg:text-7xl text-4xl mb-5 font-bold">Newest Authors</h2>
        <div className="flex gap-5  overflow-x-auto pb-2">
          {" "}
          {author?.map((data, i) => (
            <AuthorCard
              key={data?.title + i}
              title={data?.title}
              description={data?.description}
              image={data?.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default MarketPlace;
