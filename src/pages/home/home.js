
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import DataTablePrompts from "../../components/datatable/DataTablePrompts";
import { useLocation } from "react-router-dom";
const Home = () => {
    let location = useLocation();
    const token = sessionStorage.getItem('access_token');
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!token) {
        navigate("/login");
      }
    }, [token, navigate]);
    
    if( location.pathname === "execute"){

    }
    return (
      <div>
        {token ? <Navbar /> : null}
        {
          <DataTablePrompts/>}
      </div>
    );
  };
  
  export default Home;