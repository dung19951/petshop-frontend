import "./categories.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import categoryService from "../../services/category.service";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(0);
  React.useEffect(() => {
    categoryService.get().then((response) => {
      setCategories(response.data.data);
      setPage(response.data.totalPage);
      setPerPage(response.data.currentPage);
    });
  }, []);

  console.log(categories);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={categories}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[5,10,20,50,100]}
        checkboxSelection
      />
    </div>
  );
};

export default Categories;
