
import {useState,useEffect} from 'react'
import './App.css';
import Table from './component/table'
import Model from './component/model'
import Filter from './component/filter'

function App() {
  const [vehical, setVehical] = useState(true);
  const [toll,setToll] = useState(false);
  const [data,setData] = useState([]);
  const [edata,setEdata] = useState([]);
  const [search,setSearch] = useState("");
  const [selectval,setSelectval] = useState(['ALL'])
  // useEffect(()=>{
  //   backtovec()
  // },[backtovec])
  const  viewTollmain = ()=>{
    if(JSON.parse(localStorage.getItem("tollDetails"))!== null){
      var extdata = JSON.parse(localStorage.getItem("tollDetails"))
      console.log("data",extdata.tdetail)
      setData(extdata.tdetail)
    }else{
      console.log("error")
    }
  }
  const viewToll=()=>{
    if(JSON.parse(localStorage.getItem("tollDetails"))!== null){
      var extdata = JSON.parse(localStorage.getItem("tollDetails"))
      console.log("data",extdata.tdetail)
      setData(extdata.tdetail)
      setVehical(!vehical)
      setToll(!toll)
    }else{
      setVehical(!vehical)
      setToll(!toll)
    }
  
  }

  const viewEntriesmain = ()=>{
    if(JSON.parse(localStorage.getItem("vehicalEntry"))!== null){
      var extdata = JSON.parse(localStorage.getItem("vehicalEntry"))
    console.log("data list-->",extdata.tdetail)
    setEdata(extdata.tdetail)
  }
  }

 
  const viewEntries=()=>{
    if(JSON.parse(localStorage.getItem("vehicalEntry"))!== null){
      var extdata = JSON.parse(localStorage.getItem("vehicalEntry"))
    console.log("data list-->",extdata.tdetail)
    setEdata(extdata.tdetail)
    setVehical(!vehical)
    setToll(!toll)
    }else{
      setVehical(!vehical)
    setToll(!toll)
    }
    
  }

  const fil = (data,name)=>{
    console.log("setSelectval--->",data,selectval)
  
    if(name === "toll"){
      return data.filter((data)=> 
      data.tollName.includes(search.toLocaleLowerCase()))
    }else{
      return data.filter((data)=>{
      if (selectval === 'ALL') {
      return data.entry.vehicleNumber.includes(search.toLocaleUpperCase()) || data.entry.tollName.includes(search.toLocaleLowerCase())
     }else if(data.entry.tollName === selectval ){
      return data.entry.vehicleNumber.includes(search.toLocaleUpperCase()) &&  data.entry.tollName.includes(selectval.toLocaleLowerCase())
     } 
    })
    }
    
  }

  const clearFil = () => {
    setSelectval('ALL')
  }

    useEffect(()=>{

        viewEntriesmain()
        viewTollmain()
 
    },[])

  return (
    <>
    <p className="title_head">Toll Management Application</p>
   
    {vehical&&
     ( 
     <>
     <Filter data={data} setSelectval={setSelectval}/>
     <div className="DisplayFlex ">
       <h5 className="titlemain">Toll entries/Vehicle entries</h5>

       <input className="nosubmit" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."/>
       <button className="btn-clear" onClick={clearFil}>clear filter</button>
     <div className="align_left">
      <Model title="Add vehical entry" data={data} viewEntriesmain={viewEntriesmain} viewTollmain={viewTollmain}/>
      <Model title="Add new toll" data={data} viewTollmain={viewTollmain} viewEntriesmain={viewEntriesmain}/>
      <button className="btn-modal" onClick={viewToll}>View all tolls</button>
      </div>

    </div>  
      <Table page="vehical" edata={fil(edata,"vehical")}  />
      </>
      )
     }
     {
      toll&&(
        <>
            <div className="DisplayFlex ">
            <h5 className="titlemain">Toll gate list</h5>

          <input className="nosubmit" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."/>

          <div className="align_left">
          <Model title="Add vehical entry" data={data} viewEntriesmain={viewEntriesmain} viewTollmain={viewTollmain}/>
         <Model title="Add new toll" data={data} viewTollmain={viewTollmain} viewEntriesmain={viewEntriesmain}/>
              <button className="btn-modal" onClick={viewEntries}>Back to Vehicle</button>
              </div>
            </div>  
             <Table data={fil(data,"toll")} viewTollmain={viewTollmain} page="toll" />
    </>


      )
     }
    </>
  );
}

export default App;
