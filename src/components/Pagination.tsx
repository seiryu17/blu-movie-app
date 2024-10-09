import React from "react";

interface PaginationProps {
  onLoadMore: () => void;
  loading: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ onLoadMore, loading }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onLoadMore}
        className="bg-blue-500 text-white rounded p-2"
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default Pagination;
