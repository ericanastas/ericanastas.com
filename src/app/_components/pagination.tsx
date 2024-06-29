export type Props = {
  page: number;
  pageCount: number;
  onPageSelected: (page: number) => void;
};

export default function Pagination({
  page,
  pageCount,
  onPageSelected: onPageChanged,
}: Props) {
  function nextButtonClick() {
    if (page < pageCount) {
      let newPage = page + 1;
      onPageChanged(newPage);
    }
  }

  function prevButtonClick() {
    if (page > 1) {
      let newPage = page - 1;
      onPageChanged(newPage);
    }
  }
  function onPageNumberClick(event: any) {
    let pageNumber = parseInt(event.currentTarget.getAttribute("data-value"));

    onPageChanged(pageNumber);
  }

  if (pageCount < 2) return null;

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex flex-1 justify-between lg:hidden">
        <a
          onClick={prevButtonClick}
          className="relative inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white cursor-pointer"
        >
          Previous
        </a>

        <div className="font-medium">
          Page {page} of {pageCount}
        </div>

        <a
          onClick={nextButtonClick}
          className="relative ml-3 inline-flex items-center rounded-md  bg-black px-4 py-2 text-sm font-medium text-white  cursor-pointer"
        >
          Next
        </a>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
        <nav
          className="isolate inline-flex -space-x-px rounded-md "
          aria-label="Pagination"
        >
          <a
            onClick={prevButtonClick}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {Array.from(
            { length: pageCount },
            (x: undefined, i: number) => i + 1
          ).map((p) => {
            let selectedClassName =
              "relative z-10 inline-flex items-center bg-gray-600 px-4 py-2 text-sm font-semibold text-white";

            let className =
              "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer";
            if (p === page) {
              return (
                <a key={p} className={`${selectedClassName}`}>
                  {p}
                </a>
              );
            } else {
              return (
                <a
                  key={p}
                  data-value={p}
                  onClick={onPageNumberClick}
                  className={`${className}`}
                >
                  {p}
                </a>
              );
            }
          })}

          <a
            onClick={nextButtonClick}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}
