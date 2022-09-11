import { Pagination } from "@mui/material";
import React from "react";

function PaginationUi({ pageCount, handlePageClick, defaultValue }) {
  return (
    <Pagination
      showFirstButton showLastButton
      defaultPage={defaultValue}
      onChange={handlePageClick}
      count={pageCount}
      // variant="outlined"
      color="primary"
      size="large"
    />
  );
}

export default PaginationUi;
