import React from "react";
import { Pagination } from "@mui/material";
import { createMuiTheme, ThemeProvider } from "@mui/material";

export default function CustomPagination({ setPage, numberOfpages = 10 }) {
  // scroll to the top when the page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="w-[100%] flex justify-top">
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numberOfpages}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
}
