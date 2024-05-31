import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width:  59 },
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 120,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 120,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 120,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 120,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);



  // const { isLoading, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button className="btn" onClick={() => setOpen(true)}>Add New User</button>
      </div>
      
      
        <DataTable slug="users" columns={columns} rows={userRows} />
      
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;