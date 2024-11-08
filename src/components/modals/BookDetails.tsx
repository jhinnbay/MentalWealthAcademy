// BookDetails.jsx
import React from "react";
import PropTypes from "prop-types";

const BookDetails = ({ isOpen, onClose, bookData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 w-[1015px] h-[677px] bg-[#8F8F8F] bg-opacity-50 flex justify-center items-center">
      {bookData && (
        <div className="bg-white p-5 rounded shadow-lg grid gap-5">
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold text-start">{bookData.title}</h2>
            <button
              onClick={onClose}
              className="px-5 py-3 font-bold bg-black text-lg rounded-lg text-white"
            >
              X
            </button>
          </div>
          <div className="md:flex gap-5 text-white">
            <img
              src={bookData.coverArt}
              alt={bookData.title}
              className="h-[410px] w-[273px] border rounded-2xl object-contain mb-4"
            />
            <div className="grid gap-1">
              <div className="font-bold border border-white rounded-lg px-5 text-center py-[10px] shadow-md bg-[#BCBCBC]">
                <h3 className="text-center text-sm">{bookData.title}</h3>
              </div>
              <div className="font-bold border border-white rounded-lg px-5 text-center py-[10px] shadow-md bg-[#BCBCBC]">
                <h4 className="text-sm">Authors: {bookData.author}</h4>
              </div>
              <div className="font-bold border border-white rounded-lg px-5 text-center py-[10px] shadow-md bg-[#BCBCBC]">
                <h4 className="text-sm">Added: 6/20/2024</h4>
              </div>
              <div className="font-bold border border-white rounded-lg px-5 text-center py-[10px] shadow-md bg-[#BCBCBC]">
                <h4 className="text-sm">File size: 564MB</h4>
              </div>
              <div className="font-bold border border-white rounded-lg px-5 text-center py-[10px] shadow-md bg-[#BCBCBC]">
                <h4 className="text-sm">ISBM: 1346562341652314</h4>
              </div>
              <div className="font-bold bg-white border border-white rounded-lg px-5 text-center py-[10px] shadow-md">
                <h4 className="text-sm">CID: 0SDSHDSD0r32DJX873</h4>
              </div>
            </div>
          </div>
          <button className="bg-white border rounded-sm text-xl text-center p-[10px]">
            Rent Book
          </button>
        </div>
      )}
    </div>
  );
};

// Define prop types for the component
BookDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  bookData: PropTypes.shape({
    title: PropTypes.string,
    coverArt: PropTypes.string,
    author: PropTypes.string,
  }),
};

export default BookDetails;
