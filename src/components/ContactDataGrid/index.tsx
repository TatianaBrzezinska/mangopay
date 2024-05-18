import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { Contact } from '@/utils/localStorage';

import { getColumns } from './columns';

interface ContactDataGridProps {
  contacts: Contact[];

  onEdit: (contact: Contact) => void;

  onDelete: (contact: Contact) => void;
}

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
    <DataGrid
      rows={contacts}
      columns={getColumns(onEdit, onDelete)}
      paginationModel={{ pageSize: 5, page: 0 }}
      getRowId={(row) => row.id}
      onRowClick={handleRowClick}
    />
  );
};

export default ContactDataGrid;
