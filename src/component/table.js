
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'



const Table = ({data,page,edata,viewTollmain})=>{



  const handleDel = (id)=>{

      console.log('id-->',id)
      var {tdetail} = JSON.parse(localStorage.getItem("tollDetails"));
       const filtered = tdetail.filter(item => item.id !== id);
      console.log("fil--->",filtered)
      var details = {}
      var tdetail =  filtered 
         details.tdetail= tdetail
         console.log("details-->",details)
       localStorage.setItem("tollDetails", JSON.stringify(details));
       viewTollmain()

  }


 return(
    <>
    <div  className="Table_wrapper Table_responsive">
<table>
 <thead>
  { page === "vehical" ? (
  <tr>
     <th>VEHICLE TYPE</th>
     <th>VEHICLE NUMBER</th>
     <th>DATE/TIME</th>
     <th>TOLL NAME</th>
     <th>TARIFF</th>
   </tr>
   ): (
    <tr>
      <th>TOLL NAME</th>
     <th>CAR/JEEP/VAN</th>
     <th>LVC</th>
     <th>TRUCK/BUS</th>
     <th>HEAVY VEHICLE</th>
     <th>DELETE</th>
   </tr>
   )
   
  
  }
 </thead>
 <tbody>
 { page === "vehical" && (edata !== null|| edata !== undefined)  && edata.length > 0 ? (
   edata.map((d,i)=>{
    return(
    <tr>
        <td>{d.entry.vehicleType}</td>

        <td>{d.entry.vehicleNumber}</td>
  
        <td>{d.endate}, {d.time}</td>
   
        <td>{d.entry.tollName}</td>
    
        <td>{d.traffiAmount}</td>
        
    </tr>
    )})
   ): page === "vehical" &&  edata.length === 0 && (<>
   <tr>
         <h3>Data Not Found</h3>
         </tr>
   </>)
    }
   {page === "toll" &&  (data !== null|| data !== undefined) && data.length > 0  ? (
    data.map((d,i)=>{
      return(
    <tr key={d.id}>
        <td>{d.tollName}</td>
        

        <td>{d.vehicalFare.field.single}/{d.vehicalFare.field.return}</td>
  
        <td>{d.vehicalFare.field1.single}/{d.vehicalFare.field1.single}</td>
   
        <td>{d.vehicalFare.field2.single}/{d.vehicalFare.field2.single}</td>
    
        <td>{d.vehicalFare.field3.single}/{d.vehicalFare.field3.single}</td>

        <td>
          <div>
            <button className="btn-delete" onClick={()=>handleDel(d.id)}>
            <FontAwesomeIcon icon={faTrash} color="gray" />
            </button>
          </div>
        </td>
    </tr>
    )})
     ) :page === "toll" &&  data.length === 0 && (
      <>
      <tr>
       <h3>Toll Not Found</h3>
       </tr>
      </>
     )
    }
 </tbody>
</table>
</div>

</>
 )

}

export default Table
