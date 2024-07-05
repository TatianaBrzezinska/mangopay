import { Delete, Edit } from "@mui/icons-material";
import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

import theme from "@/theme";
import { Contact } from "@/types";

import { CustomHeader, CustomIconButton } from "./styles";

export const getColumns = (
  handleEditClick: (contact: Contact) => void,
  handleDeleteClick: (contact: Contact) => void,
): GridColDef[] => [
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    sortable: false,
    headerAlign: "right",
    renderHeader: () => <CustomHeader>Actions</CustomHeader>,
    renderCell: (params) => (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        height="100%"
        gap={1}
      >
        <CustomIconButton
          onClick={(e) => {
            e.stopPropagation();
            handleEditClick(params.row);
          }}
        >
          <Edit />
        </CustomIconButton>
        <CustomIconButton
          sx={{ color: theme.palette.error.main }}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteClick(params.row);
          }}
        >
          <Delete />
        </CustomIconButton>
      </Box>
    ),
  },
];
