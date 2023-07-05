
import { useState } from 'react';
import './App.css';

function App() {
  const [activity,setActivity]= useState("")

  const [listData,setListdata] =useState([])
  
  function addActivity(){
    // setListdata([...listData, activity])
    // console.log(listData)

    setListdata((listData)=>{
      const updatedList =[...listData,activity]
      console.log(updatedList)

      setActivity('')
      return updatedList
    })
  }

  function removeActivity(i){
    const updatedListData = listData.filter((elem,id)=>{
      return i!==id;
    })
    setListdata(updatedListData)
  }

  function removeAll(){
    return setListdata([]) 
  }

  return (
<>
    <div className='container'>
      <div className='header'>TODO LIST</div>
      <input type='text' placeholder='Add activity' value={activity} onChange={e=>setActivity(e.target.value)}/>
    <button onClick={addActivity}>ADD</button>
    <p className='List-heading'>Here is your task :{')'}</p>
    {listData!==[] && listData.map((data,i)=>{
      return(
        <>
        <p key={i}>
          <div className='listData'>
            {data}  
          </div>
          <button className='btn-position' onClick={()=>removeActivity(i)}>remove(-)</button>
        </p>
       
        </>
      

      )
    })}
    {listData.length>=1 && <button onClick={removeAll} >RemoveAll</button>}
     
    </div>
</>

  );
}

export default App;
