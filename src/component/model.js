import {useState,useEffect} from 'react'


const Model = ({title,data,viewEntriesmain,viewTollmain})=>{

    const [modal, setModal] = useState(false);

    const [toll,setToll] =useState("");
    const [tollval,setTollval] = useState([])
    const [val,setVal] = useState()
    const [ reval,setReval] = useState("")
    const [entry, setEntry] = useState({
      tollName:'',
      vehicleType: '',
      vehicleNumber: '',
      dateandtime: new Date(),
      enter:false,
      return:false
    })

    
    const [field, setField] = useState({
      vehicleType: '',
      singlecar: '',
      returncar: '',
    })
    const [field1, setField1] = useState({
      vehicleType: '',
      single: '',
      return: '',
    })
    const [field2, setField2] = useState({
      vehicleType: '',
      single: '',
      return: '',
    })
    const [field3, setField3] = useState({
      vehicleType: '',
      single: '',
      return: '',

    })


    const handleChange = (e)=>{
     
        if(e.target.name ==="vehicleType" && e.target.value === "Car/Jeep/Van"){
         setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }else if(e.target.name ==="vehicleType" && e.target.value === "LCV"){
          setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }else if(e.target.name ==="vehicleType" && e.target.value === "Truck/Bus"){
          setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }else if(e.target.name ==="vehicleType" && e.target.value === "Heavy vehicle"){
          setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }else{
          console.log(e.target.name,e.target.value)
        }
    }
    const handleval = (e)=>{
  
        if(field.vehicleType === "Car/Jeep/Van"&& (field.single === undefined ||field.return === undefined )){
          setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }else if(field1.vehicleType === "LCV"&& (field1.single === undefined || field1.return === undefined)){
          setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));    
        }else if(field2.vehicleType === "Truck/Bus"&& (field2.single === undefined || field2.return === undefined)){
          setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }else{
          setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    }

    const handleChange1 = (e)=>{
     
      if(e.target.name ==="vehicleType" && e.target.value === "Car/Jeep/Van"){
       setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }else if(e.target.name ==="vehicleType" && e.target.value === "LCV"){
        setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }else if(e.target.name ==="vehicleType" && e.target.value === "Truck/Bus"){
        setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }else{
        setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }

  }
  const handleval1 = (e)=>{
   
    if(field.vehicleType === "Car/Jeep/Van"&& (field.single === undefined || field.return === undefined )){
      setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(field1.vehicleType === "LCV"&& (field1.single === undefined || field1.return === undefined)){
      setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(field2.vehicleType === "Truck/Bus"&& (field2.single === undefined || field2.return === undefined)){
      setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else{
      setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
}
  const handleChange2 = (e)=>{
     
    if(e.target.name ==="vehicleType" && e.target.value === "Car/Jeep/Van"){
     setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(e.target.name ==="vehicleType" && e.target.value === "LCV"){
      setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(e.target.name ==="vehicleType" && e.target.value === "Truck/Bus"){
      setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else{
      setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

  }

  const handleval2 = (e)=>{

    if(field.vehicleType === "Car/Jeep/Van"&& (field.single === undefined || field.return === undefined )){
      setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(field1.vehicleType === "LCV"&& (field1.single === undefined || field1.return === undefined)){
      setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(field2.vehicleType === "Truck/Bus"&& (field2.single === undefined || field2.return === undefined)){
      setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else{
      setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
}

  const handleChange3 = (e)=>{
     
    if(e.target.name ==="vehicleType" && e.target.value === "Car/Jeep/Van"){
     setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(e.target.name ==="vehicleType" && e.target.value === "LCV"){
      setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else if(e.target.name ==="vehicleType" && e.target.value === "Truck/Bus"){
      setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }else{
      setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

}

    const handleval3 = (e)=>{
  
      if(field.vehicleType === "Car/Jeep/Van"&& (field.single === undefined || field.return === undefined )){
        setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }else if(field1.vehicleType === "LCV"&& (field1.single === undefined || field1.return === undefined)){
        setField1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }else if(field2.vehicleType === "Truck/Bus" && (field2.single === undefined || field2.return === undefined)){
        setField2((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }else{
        setField3((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }
    }

 
  const handleSubmit = (e) => {

    var idz = Math.floor(Math.random()* Date.now()*3)
  
    e.preventDefault()
    if (localStorage.getItem("tollDetails") === null) {
     
    var details = {}
      var tdetail = [{
        id : idz,
        tollName: toll,
        vehicalFare:{
          field,
          field1,
          field2,
          field3
         }}]
         details.tdetail= tdetail

        localStorage.setItem('tollDetails', JSON.stringify(details));
        viewTollmain()
        toggleModal()
        }else{

          var extdata = JSON.parse(localStorage.getItem("tollDetails"));
       
          var item = {
            id:idz,
            tollName: toll,
          vehicalFare:{
            field,
            field1,
            field2,
            field3
           }}
           extdata.tdetail.push(item);
           localStorage.setItem('tollDetails', JSON.stringify(extdata));
  
           viewTollmain()
           toggleModal()
        }
  }


          const handleEntry =(e)=>{
         
            const newdata= []

                if(e.target.name === "vehicleType"){
          
                  for(let i=0; i<data.length; i++){
                      if(data[i].tollName === entry.tollName ){
                        if(e.target.name === "vehicleType"&& e.target.value === "Car/Jeep/Van" ){
                        newdata.push(data[i].vehicalFare.field)
                        }else if(e.target.name === "vehicleType"&& e.target.value === "LCV" ){
                          newdata.push(data[i].vehicalFare.field1)
                          }else if(e.target.name === "vehicleType"&& e.target.value === "Truck/Bus" ){
                            newdata.push(data[i].vehicalFare.field2)
                            }else if(e.target.name === "vehicleType"&& e.target.value === "Heavy vehicle" ){
                              newdata.push(data[i].vehicalFare.field3)
                              }else{
                                console.log("data")
                              }
                      }
                    }
                
                  
                  setVal(newdata[0].single)
                  setReval(newdata[0].return)
                  setTollval(newdata)
              
                }

            
          
                if(e.target.name === "vehicleNumber"){
                  
                  setEntry((prev) => ({ ...prev, [e.target.name]: e.target.value.toUpperCase() }));
                  var extdata = JSON.parse(localStorage.getItem("vehicalEntry"));
            
                  const filtered = extdata.tdetail.filter(item => {
                    if( e.target.value === item.entry.vehicleNumber && item.returnval === false ) {
        
                      return item
                    }
                  })
                 
                  if(filtered.length === 0 ){
                     setVal(tollval[0].single) 
                    
                  }
                  if(filtered.length === 1 ){
                    setVal(tollval[0].return) 
               
                 }
                  setEntry((prev) => ({ ...prev, [e.target.name]: e.target.value.toUpperCase() }));
                }else if(e.target.name === "tollName"){
         
                  setEntry((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                }else if(e.target.name === "vehicleType"){
              
                  setEntry((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                }
                else{
               
                  setEntry((prev) => ({ ...prev, [e.target.name]: setVal(newdata[0].single) }));
                }
              }

      const handleSubmitentry = (e) =>{
        e.preventDefault()
       
        if (localStorage.getItem("vehicalEntry") === null) {
          var details = {}
          let date = (new Date())
          let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
          let date1 = String((new Date())).split(' ')[4]
          
            var tdetail = [{entry,traffiAmount:val,endate:dateMDY,time:date1,returnval : false}]
               details.tdetail= tdetail
      
              localStorage.setItem('vehicalEntry', JSON.stringify(details));
              viewEntriesmain()
               toggleModal()
              }else{
                
                   
                var date = (new Date())
                var dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                var date1 = String((new Date())).split(' ')[4]
             
                var extdata = JSON.parse(localStorage.getItem("vehicalEntry"));
             
                var entreddata = {entry,traffiAmount:val,endate:dateMDY,time:date1,returnval : false}


                const filtered = extdata.tdetail.filter(item => {
                  if(entreddata.entry.tollName===item.entry.tollName && entreddata.entry.vehicleNumber===item.entry.vehicleNumber&&entreddata.entry.vehicleType===item.entry.vehicleType&& item.returnval === false ){
                 
                    return item
                  }
 
                
                });
        

                
              
            
                if(filtered.length===0){
                  setEntry((prev) => ({ ...prev,enter: true,return:true}));
                  
                var item = {entry,traffiAmount:val,endate:dateMDY,time:date1,returnval : false}
           
                 extdata.tdetail.push(item);
                 localStorage.setItem('vehicalEntry', JSON.stringify(extdata));
               
                 viewEntriesmain()
                 toggleModal()
                }

                if(filtered.length === 1){
          
                   if(entreddata.endate === filtered[0].endate){
             
                    var dtsplt = filtered[0].time.split(":")[0]+ '.' +  filtered[0].time.split(":")[1]
                    var dtsplt2 = entreddata.time.split(":")[0]+ '.' + entreddata.time.split(":")[1]
                    var timeMath = Math.abs(dtsplt-dtsplt2)
                   
                    if(timeMath <= 0.99 ){
                      setEntry((prev) => ({ ...prev,enter: false,return:true}));
              
                      var item = {entry,traffiAmount:val-20,endate:dateMDY,time:date1,returnval : true}
                      alert("discounted amounnt for return before 1hr from return fare--> " + item.traffiAmount)
                      extdata.tdetail.push(item);
                      localStorage.setItem('vehicalEntry', JSON.stringify(extdata));
                      
                      viewEntriesmain()
                      toggleModal()
                     }else{
                      setEntry((prev) => ({ ...prev,enter: false,return:true}));
                      var item = {entry,traffiAmount:val,endate:dateMDY,time:date1,returnval : true}
               
                      alert("no discount fare expired")
                      extdata.tdetail.push(item);
                      localStorage.setItem('vehicalEntry', JSON.stringify(extdata));
                
                      viewEntriesmain()
                      toggleModal()
                     }
                }
                 
              }
      }
    }
      



  const toggleModal = () => {
    setModal(!modal);
    setToll('')
    setField('')
    setField1('')
    setField2('')
    setField3('')
    setVal('')
    setReval('')
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {title}
      </button>

      {modal && title === "Add vehical entry" ? (

        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{title}</h2>
            <form onSubmit={handleSubmitentry}>
              <div>

                <small>Select Toll Name</small>
              <select className="input_form width_340" name="tollName" onChange={handleEntry} required>
              <option>Select Toll</option>
              {
                data.map((e,i)=>{
                  return <option key={i} value={e.tollName}> {e.tollName} </option>
                })
              }
                </select>
                
                <small>Select Vehicle Type</small>
              <select className="input_form width_340" name="vehicleType" onChange={handleEntry} required>
                <option>Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy Vehicle</option>
                </select>

                <small>Enter Vehicle Number</small>
                <input className="input_form width_300" placeholder="Enter Vehicle Number" name="vehicleNumber" onChange={handleEntry} required/>

                <small> Traffi Amount</small>
                <input className="input_form width_300" placeholder="Enter Traffi Amount" name="straffiAmount" value={val} onChange={(e)=>setVal(e.target.value)} disabled/>
                
      
                <button className="btn-modle-in">Add Entry</button>
              </div>
              </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      ): modal && title === "Add new toll" ? (
        <>
         <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <small>Add Toll Name</small>
                <input className="input_form width_300" placeholder="Enter Toll Name" value={toll} onChange={(e)=>setToll(e.target.value)} required/>
                  
                <p>Vehicle Fare details</p>
                <div className="DisplayFlex margin_8">
                <select name="vehicleType" className="input_form width_340 margin_5" onChange={handleChange} >
                <option value="dummy">Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy Vehicle</option>
                </select>
                <input type="number" className="input_form width_300 margin_5" placeholder="Enter Single Journey Amount"    onChange={handleval} name="single" required/>
                <input  type="number" className="input_form width_300 margin_5" placeholder="Enter Return Journey Amount"  onChange={handleval} name="return" required/>
                </div>

                <div className="DisplayFlex margin_8">
                <select name="vehicleType" className="input_form width_340 margin_5" onChange={handleChange1}>
                <option >Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy Vehicle</option>
                </select>
                <input type="number" className="input_form width_300 margin_5" placeholder="Enter Single Journey Amount"   onChange={handleval1} name="single" required/>
                <input  type="number" className="input_form width_300 margin_5" placeholder="Enter Return Journey Amount"  onChange={handleval1} name="return" required/>
                </div>


                <div className="DisplayFlex margin_8">
                <select  name="vehicleType" className="input_form width_340 margin_5" onChange={handleChange2} >
                <option>Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy Vehicle</option>
                </select>
                <input type="number" className="input_form width_300 margin_5" placeholder="Enter Single Journey Amount"   onChange={handleval2} name="single" required/>
                <input  type="number" className="input_form width_300 margin_5" placeholder="Enter Return Journey Amount"  onChange={handleval2} name="return" required/>
                </div>


                <div className="DisplayFlex margin_8">
                <select name="vehicleType"  className="input_form width_340" onChange={handleChange3}>
                <option>Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy Vehicle</option>
                </select>
                <input type="number" className="input_form width_300 margin_5" placeholder="Enter Single Journey Amount"  onChange={handleval3}name="single" required/>
                <input  type="number" className="input_form width_300 margin_5" placeholder="Enter Return Journey Amount"onChange={handleval3} name="return" required />
                </div>

                <button className="btn-modle-in">Add details</button>
            
              </div>
              </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
           
          </div>
        </div>
        </>
      ):(<>
      </>)}
</>
  );
}

export default Model