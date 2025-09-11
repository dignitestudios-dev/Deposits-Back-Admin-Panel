import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";

export default function Pagination({ pagnition, setPageNo }) {
  const currentPage = pagnition?.page || pagnition?.currentPage || 1;
  const totalPages = pagnition?.totalPages || 1;

  const getPagination = () => {
    const pages = [];

    if (totalPages <= 3) {
      // agar total pages 3 ya kam ho toh direct sab dikhado
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 2) {
        // start pages
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        // end pages
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        // middle pages
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  const paginationItems = getPagination();

  return (
    <div className="flex items-center">
      {/* Previous Button */}
      <button
        onClick={() => setPageNo(Math.max(currentPage - 1, 1))}
        className="w-full p-3 text-base bg-transparent"
        disabled={currentPage === 1}
      >
        <FaChevronLeft color="#979797" />
      </button>

      {/* Pages */}
      <div className="bg-white flex items-center rounded-[15px]">
        {paginationItems.map((page, idx) =>
          page === "..." ? (
            <span
              key={idx}
              className="py-2 text-base text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => setPageNo(page)}
              className={`px-4 py-2 text-base rounded-xl transition
                ${page === currentPage
                  ? "text-white bg-gradient-to-r from-[#2F7EF7] to-[#1C4A91]"
                  : "text-[#6D6D6D]"
                }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => setPageNo(Math.min(currentPage + 1, totalPages))}
        className="w-full p-3 text-base bg-transparent"
        disabled={currentPage === totalPages}
      >
        <FaAngleRight color="#2F7EF7" />
      </button>
    </div>
  );
}
