import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Table = () => {
    const [list, setList] = useState();
    const { data, loading, error } = useFetch("http://localhost:3300/api/users");

    useEffect(() => {
        setList(data);
    }, [data]);

    const handleDelete = async (id) => {
        console.log(id);  
        try {
          await axios.delete(`http://localhost:3300/api/users/${id}`);
          setList(list.filter((item) => item._id !== id));
        } catch (err) {}
      };
    
    const handelInput = (e) =>{
        e.persist();        
    }
    const courseDetaills = data.map((iteam, index) => {     
           
        return (
            <tr key={index}>                
                <td>{iteam.username}</td>
                <td>{iteam.password}</td>
                <td>{iteam.email}</td>    
                {iteam.isVerify ? <td>Verificado</td>: <td>Sin verificar</td> }  
                {iteam.isAdmin ?  <td>Administrador</td>: <td>Usuario</td> } 
                <td><Link to={`/update/${iteam._id}`}><button>Edit</button></Link></td>             
                <td><button onClick={e =>{handleDelete(iteam._id)}}>Delete</button></td> 
                               
            </tr>
        );
    })

    return (
        <div>
             {loading ? ("Loading please wait") : (
                <div>
                    <div>
                        <h2>Table of Courses</h2>
                        <Link to="/create"><button>Add Course</button></Link>
                        <div >
                            
                            <input type="text" placeholder="Search.." name="search" onChange={handelInput}/>
                            
                        </div>
                        
                    </div>
                    <div>  
                                              
                        <table  id="courses">                        
                            <thead>
                                <tr>                                
                                    <th>Username</th>                                    
                                    <th>Password</th>
                                    <th>Email</th>
                                    <th>Is Verify</th>
                                    <th>Is Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                            {courseDetaills}
                            </tbody>
                            
                        </table>
                        
                    </div>
                </div>
            )}


        </div>
    );
}

export default Table;