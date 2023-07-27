import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from 'react-router-dom';
import axios from "../../axiosConfig";

const DataTablePrompts = () => {
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch("http://localhost:3300/api/prompts");

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3300/api/prompts/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) { }
  };

    const handelInput = (e) => {
    e.persist();
    // Filtrar los datos según el término de búsqueda
    const searchTerm = e.target.value.toLowerCase();
    const filteredList = data.filter(item => (
      item.username.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm)
    ));
    setList(filteredList);
  }

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Instruction',
      selector: 'instruction',
      sortable: true,
    },
    {
      name: 'Context',
      selector: 'context',
      sortable: true,
    },
    {
      name: 'size',
      sortable: true,
      cell: row => row.size ? 'not required' : row.size,
    },
    {
      name: 'Tags',
      cell: row => <Link to={`/prompts/${row._id}`}><button>Execute</button></Link>,
    },
    {
      name: 'Responses',
      cell: row =><Link to={`/prompts/${row._id}`}><button>Execute</button></Link>,
      
    },
    {
      name: 'Ejecutar',
      cell: row => <Link to={`/prompts/${row._id}`}><button>Execute</button></Link>,
      button: true,
    },
    {
      name: 'update',
      cell: row => <button onClick={(e) => handleDelete(row._id)}>Update</button>,
      button: true,
    },
  ];

  return (
    <div>
      {loading ? ("Loading please wait") : (
        <div>
          <div className="container">
            <h2>Table of prompts</h2>
            <Link to="/create"><button className="btn btn-primary">Add propts</button></Link>
            <div className="mt-3">
              <input type="text" className="form-control" placeholder="Search.." name="search" onChange={handelInput} />
            </div>
          </div>
          <div>
            <DataTable
              columns={columns}
              data={list}
              pagination
              highlightOnHover
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTablePrompts;