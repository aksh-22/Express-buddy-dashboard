// type Props = {};

import { useLoaderData, useSearchParams } from "react-router-dom";

// export default function Pagination({}: Props) {
export default function Pagination() {
  const [searchParam, setSearchParam] = useSearchParams({ page: "" });
  const { bookingList }: any = useLoaderData();

  const pages = Array.from(
    { length: bookingList?.meta?.totalPages },
    (_, i) => i + 1
  );

  return (
    <>
      {bookingList?.meta?.totalCount ? (
        <div>
          <p>
            Showing{" "}
            {searchParam.get("page") !== ""
              ? Number(searchParam.get("page")) - 1
              : ""}
            1 to{" "}
            {searchParam.get("page") === "" ? "1" : searchParam.get("page")}0 of{" "}
            {bookingList?.meta?.totalCount} entries
          </p>
        </div>
      ) : (
        <p>Showing 0 to 0 of 0 entries</p>
      )}
      <div>
        <span
          style={{
            border: "1px solid #000",
            padding: "0.5rem 1rem",
            borderTopLeftRadius: "0.3rem",
            borderBottomLeftRadius: "0.3rem",
          }}
          onClick={() => {
            Number(searchParam.get("page")) > 2
              ? setSearchParam({
                  page: `${Number(searchParam.get("page")) - 1}`,
                })
              : searchParam.get("page")
              ? setSearchParam({
                  page: "",
                })
              : null;
          }}
        >
          Previous
        </span>
        {bookingList?.meta?.totalCount
          ? pages?.map((elem) => (
              <span
                key={elem}
                onClick={() =>
                  elem !== 1
                    ? setSearchParam({ page: `${elem}` })
                    : setSearchParam({ page: "" })
                }
                style={{
                  border: "1px solid #000",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                }}
              >
                {elem}
              </span>
            ))
          : null}
        <span
          style={{
            border: "1px solid #000",
            padding: "0.5rem 1rem",
            borderTopRightRadius: "0.3rem",
            borderBottomRightRadius: "0.3rem",
          }}
          onClick={() => {
            bookingList?.meta?.hasNextPage
              ? setSearchParam({
                  page: `${
                    Number(
                      searchParam.get("page") ? searchParam.get("page") : 1
                    ) + 1
                  }`,
                })
              : null;
          }}
        >
          Next
        </span>
      </div>
    </>
  );
}
