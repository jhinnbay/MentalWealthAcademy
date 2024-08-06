import { ArticalCard } from "@/components/cards/ArticalCard";
import { BooksCard } from "@/components/cards/BooksCard";
import { ProposalCard } from "@/components/cards/ProposalCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Buffer } from "buffer";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { useState } from "react";
import BookStorageABI from "../../ABI/bookStorageABI.json";
import { LibraryCard } from "@/components/cards/LibraryCard";
import { RequestForBook } from "@/components/pages/library/RequestForBook";
import {
  articalsData,
  audioBooksData,
  booksData,
  proposalData,
} from "@/data/library_items";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const pinataApiKey = import.meta.env.VITE_PINATA_API_KEY;
const pinataSecretApiKey = import.meta.env.VITE_PINATA_API_SECRET;

const ipfs = create({
  host: "api.pinata.cloud",
  port: 443,
  protocol: "https",
  apiPath: "/pinning/v1/add",
  headers: {
    "Content-Type": "application/json",
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataSecretApiKey,
  },
});
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
console.log(contractAddress, pinataApiKey);

const Library = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState("");
  const [allBooks, setAllBooks] = useState([]);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
    // const pdfFile = e.target.files[0];
    // handleFileUpload(pdfFile)
  };

  const handleFileUpload = async () => {
    console.log("hi", pdfFile);
    if (!pdfFile) return;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        BookStorageABI,
        signer
      );

      const pdfBuffer = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(Buffer.from(reader.result));
        reader.onerror = reject;
        reader.readAsArrayBuffer(pdfFile);
      });

      const formData = new FormData();
      formData.append(
        "file",
        new Blob([pdfBuffer], { type: "application/pdf" })
      );

      const response = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT_TOKEN}`,
          },
          body: formData,
        }
      );
      console.log("response is", response);
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error uploading to IPFS to piniata:", errorData);
        throw new Error(`HTTP error status: ${response.status}`);
      }

      const { IpfsHash } = await response.json();
      setIpfsHash(IpfsHash);

      console.log(",contract", contract);
      const tx = await contract.connect(signer).storeBookCID(IpfsHash);

      await tx.wait(1);
      console.log("upload", tx);
      alert("PDF uploaded and CID stored in smart contract");
    } catch (error) {
      console.error("Error uploading to IPFS:", error);
      alert(
        "Failed to upload PDF to IPFS. Please check the console for more details."
      );
    }
  };

  const handleRetrieve = async () => {
    try {
      const [users, cids] = await contract.getAllBooks();
      console.log("books", cids);

      const books = cids.map((cid) => ({
        cid,
      }));
      console.log("books", books);
      setAllBooks(books);

      // Fetch and display each book in PDF format
      await Promise.all(
        books.map(async (book) => {
          const response = await fetch(
            `https://gateway.pinata.cloud/ipfs/${book.cid}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
          }
        })
      );
    } catch (error) {
      console.error("Error retrieving all book CIDs:", error);
      alert(
        "Failed to retrieve all book CIDs. Please check the console for more details."
      );
    }
  };
  const handleDownload = async (cid) => {
    try {
      const response = await fetch(`https://ipfs.io/ipfs/${cid}`);
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded_book.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert(
        "Failed to download PDF. Please check the console for more details."
      );
    }
  };

  return (
    <main>
      <div className="bg-primary-background-700 py-9">
        <section className="container">
          <div className="bg-library bg-center bg-cover p-6 rounded-lg text-white ">
            <div className="flex gap-2 items-center invisible opacity-0">
              <h6 className="text-2xs sm:!text-2xl">Play Video</h6>{" "}
              <Button className="aspect-square w-[54px] rounded-sm bg-[rgba(255,255,255,0.5)]">
                <img src="/icons/Play.svg" />
              </Button>{" "}
            </div>
            <h3
              className="text-xs sm:!text-3xl  font-bold invisible opacity-0"
              style={{ lineHeight: "unset" }}
            >
              Support Students By <br />
              Decentralizing Textbooks
            </h3>
          </div>
        </section>
        {/* Articals  */}
        <section className="container py-7">
          <h3 className="text-xs font-bold">STAYING UPDATED</h3>
          <h2 className="text-2xl md:text-5xl font-bold">Latest Articles</h2>
          <div className="flex overflow-x-auto gap-3 ">
            {articalsData.map((data, i) => (
              <ArticalCard
                key={"proposal_card" + data?.title + "" + i}
                data={data}
              />
            ))}
          </div>
        </section>
        {/* Books  */}
        <section className="container py-7">
          <h3 className="text-xs font-bold">FEATURED LIBRARY BOOKS</h3>
          <h2 className="text-2xl md:text-5xl font-bold">Books</h2>
          <div className="flex overflow-x-auto gap-3 ">
            {booksData.map((data, i) => (
              <LibraryCard
                key={"library books" + data.title + "" + i}
                data={data}
              />
            ))}
          </div>
        </section>
        {/* Audio Books  */}
        <section className="container py-7">
          <h3 className="text-xs font-bold">FEATURED AUDIOBOOKS</h3>
          <h2 className="text-2xl md:text-5xl font-bold">Audiobooks</h2>
          <div className="flex overflow-x-auto gap-3 ">
            {audioBooksData.map((data, i) => (
              <LibraryCard
                key={"audiobook" + data.title + "" + i}
                data={data}
              />
            ))}
          </div>
          </section>

        <section className="container">
          <h3 className="text-xs font-bold">EMPOWERED BY YOU</h3>
          <h2 className="text-2xl md:text-5xl font-bold">DAO Voting</h2>
          <div className="flex overflow-x-auto gap-3 ">
            {proposalData.map((data, i) => (
              <ProposalCard
                key={"proposal_card" + data.title + "" + i}
                data={data}
              />
            ))}
          </div>
        </section>
        {/* library footer   */}
        <footer className=" container  mt-[62px] text-[#E5E5E5]">
          <div className="p-[20px_40px_0px_40px] lg:p-[48px_112px_0px_112px] bg-black_grad">
            <div className="py-[64px] flex flex-col gap-[64px]">
              <div className="flex flex-wrap justify-between gap-8">
                <div>
                  <img src="/icons/Company Footer Placeholder.png" />
                  <div className="flex flex-wrap gap-6 items-center mt-7">
                    {["About", "Blog", "Careers", "Whitepaper"].map((data) => (
                      <Link href="#" key={"footer_menu" + data}>
                        {data}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-[430px] max-w-full">
                  <p>
                    Get the latest updates about Mental Wealth Academy’s new
                    features, proposals, and product updates.
                  </p>
                  <div className="mt-6 gap-2 flex items-center">
                    <Input placeholder="Ethereum Address" />
                    <Button
                      className="bg-[#262626] text-white font-semibold border-0 p-4 py-2"
                      style={{
                        filter:
                          "drop-shadow( 0px 0px 8.8px rgba(99, 102, 241, 1) )",
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-8">
                <div className="flex justify-center items-center gap-4">
                  {" "}
                  {[
                    "/icons/facebook.svg",
                    "/icons/instagram.svg",
                    "/icons/twitter.svg",
                    "/icons/linkedIn.svg",
                  ].map((data) => (
                    <img src={data} key={data + "social icon"} />
                  ))}
                </div>
                <div className="flex justify-center items-center gap-8">
                  <Link href="#">Terms of Service</Link>
                  <Link href="#">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};
export default Library;
