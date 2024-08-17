import { useEffect, useState } from "react";

interface PaginationProps {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}
export const PaginationComponent = ({ total, current,onPageChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(current);

  useEffect(() => {
    setCurrentPage(current);
  }, [current]);



  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            {total > 1 ? (
              <div className="space-x-3">
                {Array.from({ length: total }, (_, i) => {
                    const pageIndex = i + 1;
                  const isActive = i === currentPage - 1;
                  return (
                    <button
                      key={pageIndex}
                      onClick={() => onPageChange(pageIndex)}
                      aria-current={isActive ? "page" : undefined}
                      className={`z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full hover:scale-125 transition ease-in-out ${
                        isActive
                          ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-500"
                      }`}
                    >
                      {pageIndex}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </nav>
        </div>
      </div>
    </div>
  );
};
