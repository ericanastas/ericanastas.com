import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

export type Props = {
  currentPage: number;
  pageCount: number;
  onPageButtonClicked: (page: number) => void;
};

function getRange(start: number, end: number): number[] {
  if (end < start) throw new Error("end < start");

  return Array.from(
    { length: end - start + 1 },
    (x: undefined, i: number) => i + start
  );
}

export default function Pagination({
  currentPage,
  pageCount,
  onPageButtonClicked,
}: Props) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  //Maximum number of page buttons, must be an odd number 7 or greater
  const maxPageButtons = 13;

  let displayedPageNumbers: number[];

  if (pageCount <= maxPageButtons) {
    displayedPageNumbers = getRange(1, pageCount);
  } else {
    //Truncate page buttons

    let boundaryPages = Math.floor((maxPageButtons - 4) / 2);
    let startBoundaryPages = boundaryPages + 3;
    let endBoundaryPages = pageCount - 3 - boundaryPages;

    if (currentPage < startBoundaryPages) {
      //First pages
      let firstPageNumbers: number[] = getRange(
        1,
        startBoundaryPages + boundaryPages
      );
      displayedPageNumbers = [...firstPageNumbers, -1, pageCount];
    } else if (currentPage > endBoundaryPages) {
      //Last pages
      let lastPageNumbers: number[] = getRange(
        endBoundaryPages - boundaryPages + 1,
        pageCount
      );
      displayedPageNumbers = [1, -1, ...lastPageNumbers];
    } else {
      //Middle pages
      let midPageNumbers: number[] = getRange(
        currentPage - boundaryPages,
        currentPage + boundaryPages
      );
      displayedPageNumbers = [1, -1, ...midPageNumbers, -2, pageCount];
    }
  }

  function renderPageButton(pageNumber: number) {
    if (pageNumber > 0) {
      if (pageNumber === currentPage) {
        return (
          <a
            key={pageNumber}
            className={
              "relative inline-flex items-center justify-center py-2 min-w-9 text-sm font-semibold bg-gray-600 text-white"
            }
          >
            {pageNumber}
          </a>
        );
      } else {
        return (
          <a
            key={pageNumber}
            data-value={pageNumber}
            onClick={onPageNumberClick}
            className={
              "relative inline-flex items-center py-2 justify-center text-sm min-w-9 font-semibold text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-100 cursor-pointer"
            }
          >
            {pageNumber}
          </a>
        );
      }
    } else {
      return (
        <a
          key={pageNumber}
          className={
            "relative inline-flex items-center py-2 justify-center min-w-9 text-sm font-semibold ring-1 ring-inset ring-gray-400 text-gray-900"
          }
        >
          <EllipsisHorizontalIcon className="size-4" />
        </a>
      );
    }
  }

  function nextButtonClick() {
    if (currentPage < pageCount) {
      let newPage = currentPage + 1;
      onPageButtonClicked(newPage);
    }
  }

  function prevButtonClick() {
    if (currentPage > 1) {
      let newPage = currentPage - 1;
      onPageButtonClicked(newPage);
    }
  }

  function firstButtonClick() {
    if (currentPage > 1) {
      onPageButtonClicked(1);
    }
  }

  function lastButtonClick() {
    if (currentPage < pageCount) {
      onPageButtonClicked(pageCount);
    }
  }

  function onPageNumberClick(event: any) {
    let pageNumber = parseInt(event.currentTarget.getAttribute("data-value"));

    onPageButtonClicked(pageNumber);
  }

  if (pageCount == 1) return null;

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex flex-1 justify-between lg:hidden gap-1">
        <a
          onClick={firstButtonClick}
          className={`relative inline-flex items-center justify-center rounded-md ring-1 ring-inset ring-gray-400 hover:bg-gray-100 py-2 text-sm font-semibold w-16 text-gray-900 ${
            isFirstPage ? "invisible" : "cursor-pointer"
          }`}
        >
          <ChevronDoubleLeftIcon className="size-4" />
          First
        </a>
        <a
          onClick={prevButtonClick}
          className={`relative inline-flex items-center justify-center rounded-md ring-1 ring-inset ring-gray-400 hover:bg-gray-100 py-2 text-sm font-semibold w-16 text-gray-900 ${
            isFirstPage ? "invisible" : "cursor-pointer"
          }`}
        >
          <ChevronLeftIcon className="size-4" />
          Prev
        </a>

        <div className="grow font-medium flex justify-center items-center">
          Page {currentPage} of {pageCount}
        </div>

        <a
          onClick={nextButtonClick}
          className={`relative inline-flex items-center justify-center rounded-md ring-1 ring-inset ring-gray-400 hover:bg-gray-100 py-2 text-sm font-semibold w-16 text-gray-900 ${
            isLastPage ? "invisible" : "cursor-pointer"
          }`}
        >
          Next
          <ChevronRightIcon className="size-4" />
        </a>

        <a
          onClick={lastButtonClick}
          className={`relative inline-flex items-center justify-center rounded-md ring-1 ring-inset ring-gray-400 hover:bg-gray-100 py-2 text-sm font-semibold w-16 text-gray-900 ${
            isLastPage ? "invisible" : "cursor-pointer"
          }`}
        >
          Last
          <ChevronDoubleRightIcon className="size-4" />
        </a>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
        <nav
          className="isolate inline-flex -space-x-px rounded-md "
          aria-label="Pagination"
        >
          <a
            onClick={prevButtonClick}
            className={`relative inline-flex items-center justify-center font-semibold rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-400 w-16 ${
              isFirstPage ? "text-gray-300" : "cursor-pointer hover:bg-gray-100"
            }`}
          >
            <ChevronLeftIcon className="size-4" />
            Prev
          </a>

          {displayedPageNumbers.map((p) => renderPageButton(p))}

          <div
            onClick={nextButtonClick}
            className={`relative inline-flex items-center justify-center rounded-r-md px-2 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-400 w-16 ${
              isLastPage ? "text-gray-300" : "cursor-pointer hover:bg-gray-100"
            }`}
          >
            Next
            <ChevronRightIcon className="size-4" />
          </div>
        </nav>
      </div>
    </div>
  );
}
