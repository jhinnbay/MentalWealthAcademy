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
console.log(contractAddress, pinataApiKey)

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
    <>
      <aside className="fixed left-0 top-[132px] bottom-0 w-[275px] bg-library_aside py-10 px-2 text-center hidden xl:flex flex-col gap-3 ">
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
        {/* <input type="file" onChange={handleFileChange} className="w-full" /> */}
        <div className="upload-container">
              <input className="mr-2 text-white" type="file" onChange={handleFileChange} />
              {/* <button onClick={handleFileUpload}>Upload PDF</button> */}
            </div>
        <Button className="bg-[#FF596D]" size="lg" onClick={handleFileUpload} >
          <img src="/icons/upload.svg" />
          Upload A Book
        </Button>
        <Button variant="gradient" size="lg">
          Digital Library Card <img src="/icons/globe.svg" />
        </Button>
        <img
          src="/images/Library_Animal.png"
          className="relative right-[-50px]"
        />
      </aside>
      <main className="bg-library bg-fixed  min-h-[calc(100vh-133px)] bg-cover bg-left-top xl:ml-[275px]">
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