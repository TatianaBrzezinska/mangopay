import styled from "@emotion/styled";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

import theme from "@/theme";
import { Contact } from "@/utils/localStorage";

import { getColumns } from "./columns";

interface ContactDataGridProps {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
}

const PAGE_SIZE = 15;

const ContactDataGrid: React.FC<ContactDataGridProps> = ({
  contacts,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (params: GridRowParams) => {
    navigate(`/contact/${params.id}`);
  };

  return (
    <CustomDataGrid
      rows={contacts}
      columns={getColumns(onEdit, onDelete)}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: PAGE_SIZE,
          },
        },
      }}
      getRowId={(row) => row.id}
      pageSizeOptions={[PAGE_SIZE]}
      onRowClick={handleRowClick}
      autoHeight
      rowSelection={false}
      disableRowSelectionOnClick
      rowHeight={60}
    />
  );
};

export default ContactDataGrid;

const CustomDataGrid = styled(DataGrid)({
  border: "none",
  "& .MuiIconButton-root": {
    border: "none",
    backgroundColor: theme.palette.common.white,
  },
  "& .MuiDataGrid-footerContainer": {
    border: "none",
  },
  "& .MuiDataGrid-cell": {
    border: "none",
    borderTop: `1px solid ${theme.palette.common.light}`,
    "&:focus-within, &:focus": {
      outline: "none",
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    border: "none",
  },
  "& .MuiDataGrid-columnHeader": {
    outline: "none !important",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    border: "none",
    color: theme.palette.common.grey,
    fontWeight: 400,
  },
  "& .MuiDataGrid-iconButtonContainer": {
    border: "none",
  },
  "& .MuiDataGrid-row": {
    "&:hover": {
      backgroundColor: "unset",
    },
  },
});
