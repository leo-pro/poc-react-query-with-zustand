import { useState } from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({currentPage, totalPages, onPageChange}:PaginationProps) => {
  const [selectedPage, setSelectedPage] = useState(currentPage || 1)

  const handlePageChange = (page: number) => {
    setSelectedPage(page)
    onPageChange(page)
  }

  return (
    <div className="w-full flex justify-center py-10">
      <div className="join flex-wrap">
        {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
          <input
            key={page}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={page.toString()}
            checked={selectedPage === page}
            onChange={() => handlePageChange(page)}
          />
        ))}
      </div>
    </div>
  )
}