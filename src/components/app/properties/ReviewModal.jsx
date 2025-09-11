import React, { useState } from "react";
import Modal from "react-modal";
import { FaStar } from "react-icons/fa";

Modal.setAppElement("#root"); // accessibility ke liye

export default function ReviewModal({isOpen, closeModal}) {
  

 

  return (
   
     

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 mx-auto mt-20 outline-none"
        overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-20"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>

    <div className="flex  pt-6 ">
        <div className="flex flex-col items-start space-x-4 mb-4 w-[60%] gap-2">
        <h2 className="text-xl font-semibold mb-8">Rating And Reviews</h2>
          <p className="text-4xl font-bold flex items-center gap-1">4.5 <FaStar className="text-yellow-400 text-2xl" /></p>
          
          <span className="text-gray-600">419 Reviews</span>
        </div>

        {/* Progress Bars */}
        <div className="space-y-1 mb-6 w-full">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="w-6">{star}</span>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div
                  className={`h-2 rounded ${
                    star === 5
                      ? "bg-blue-600 w-4/5"
                      : star === 4
                      ? "bg-blue-600 w-1/5"
                      : "bg-blue-600 w-1/12"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
    </div>
        {/* Reviews */}
        <div className="space-y-4">
          {[1, 2].map((review) => (
            <div
              key={review}
              className="border-b border-gray-200 pb-3 flex flex-col"
            >
              <div className="flex items-center space-x-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
              <p className="text-gray-700 font-medium">Anonymous - 4 days ago</p>
              <p className="text-gray-600 text-sm mt-1">
                Lorem Ipsum Dolor Sit Amet Consectetur. Sed Consequat Suspendisse
                Diam Nibh Habitant Urna Purus Sollicitudin. Ultrices Tristique Nunc
                Adipiscing Et Eget Est Ullamcorper Commodo Donec.
              </p>
              <button className="text-blue-600 text-sm font-medium mt-1">
                {review === 1 ? "HIDE" : "SHOW"}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Close
          </button>
        </div>
      </Modal>

  );
}
