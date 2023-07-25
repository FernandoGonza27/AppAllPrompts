import Table from "../../components/datatable/Datable"
import "./list.scss"


const List = ({columns}) => {
  return (
    <div className="list">      
      <div className="listContainer">        
        <Table></Table>
      </div>
    </div>
  )
}

export default List