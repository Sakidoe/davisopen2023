import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Schedule(props) {
  const columns = [
    {
      field: "id",
      headerName: "Match Number",
      width: 120,
    },
    { field: "match", headerName: "Match Time", width: 170 },
    {
      field: "round",
      headerName: "Round",
      width: 80,
    },
    {
      field: "players",
      headerName: "Players",
      width: 580,
    },
    {
      field: "score",
      headerName: "Score",
      width: 140,
    },
    {
      field: "winner",
      headerName: "Winner",
      width: 230,
    },
  ];

  const rows = Object.values(props.data).map((d) => ({
    id: d[1],
    match: d[0],
    round: d[2],
    players: d[3],
    score: d[4],
    winner: d[5],
  }));

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        disableSelectionOnClick
        autoHeight={true}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
      <br></br>
    </Box>
  );
}
