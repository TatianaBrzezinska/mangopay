import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

import { Contact } from "../../utils/localStorage";

export const getColumns = (
  handleEditClick: (contact: Contact) => void,
  handleDeleteClick: (contact: Contact) => void,
): GridColDef[] => [
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "secondName", headerName: "Second Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    renderCell: (params) => (
      <Box>
        <IconButton onClick={() => handleEditClick(params.row)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => handleDeleteClick(params.row)}>
          <Delete />
        </IconButton>
      </Box>
    ),
  },
];
