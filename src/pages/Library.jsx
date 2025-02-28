import { ArticalCard } from "@/components/cards/ArticalCard";
import { ProposalCard } from "@/components/cards/ProposalCard";
import { Button } from "@/components/ui/button";

import { LibraryCard } from "@/components/cards/LibraryCard";
import { Footer } from "@/components/pages/Home/Footer";
import {
  articalsData,
  audioBooksData,
  booksData,
  proposalData,
} from "@/data/library_items";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { useState } from "react";
import BookStorageABI from "../../ABI/bookStorageABI.json";

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
      <div className="md:!pt-9 pt-5">
        <section className="">
          <div className="md:!border border-none border-white md:!p-3 bg-[#FFFFFF40] rounded-2xl">
            <div className="md:!bg-library bg-library_tablet  md:!bg-center bg-right bg-cover p-6 rounded-lg text-white ">
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
          </div>
        </section>

        <div className=" mt-5">
          <div className="border border-white md:!p-6 p-3 bg-[#FFFFFF40] rounded-2xl">
            <div className="bg-[#CFCAFF] md:!py-6  md:!px-4 p-3 rounded-xl">
              {/* Books  */}
              <div className="py-7 ">
                <h3 className="text-xs font-bold">FEATURED LIBRARY BOOKS</h3>
                <h2 className="text-2xl md:text-5xl font-bold">
                  Featured Books
                </h2>
                <div className="flex overflow-x-auto gap-3 ">
                  {booksData.map((data, i) => (
                    <LibraryCard
                      key={"library books" + data.title + "" + i}
                      data={data}
                    />
                  ))}
                </div>
              </div>
              {/* Audio Books  */}
              <div className=" py-7">
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
              </div>
              {/* Articals  */}
              <div className=" py-7">
                <h3 className="text-xs font-bold">STAYING UPDATED</h3>
                <h2 className="text-2xl md:text-5xl font-bold">
                  Latest Articles
                </h2>
                <div className="flex overflow-x-auto gap-3 ">
                  {articalsData.map((data, i) => (
                    <ArticalCard
                      key={"proposal_card" + data?.title + "" + i}
                      data={data}
                    />
                  ))}
                </div>
              </div>

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
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};
export default Library;
