
import React,{useState} from 'react'

const url = "http://localhost:3000/add";
const urldelete ="http://localhost:3000/delete";

function TodoCard() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleadd = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, description})
            })
            if(response.ok){
                console.log(title)
                console.log('data added successfully');
            }else{
                console.log('error in saving data')
            }
        } catch (error) {
            console.log("Error in add in list")
        }
    }

    const handleDelete = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(urldelete, {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, description})
            })
            if(response.ok){
                console.log(title)
                console.log('data deleted successfully');
            }else{
                console.log('error in deleting data')
            }
            
        } catch (error) {
            console.log("Error in deleting from the list")
        }
    }


  return (
    <div>
        <div className='w-64 h-44 ml-36 mt-24 p-5 bg-cyan-600 rounded-xl shadow-lg shadow-cyan-950'>
            <div className='ml-3'>
            <div className=''>
                <label className='text-cyan-950 font-bold'>Title:  </label>
                <input className= 'bg-cyan-100 shadow shadow-cyan-950 rounded-xl' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br/>
            
                <label className='text-cyan-950 font-bold'>Description: </label>
                <input  className='bg-cyan-100 rounded-xl  shadow shadow-cyan-950' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
        
            <div className=' place-content-center mt-2'>
                <button className='float-left rounded-lg bg-cyan-700 w-20 shadow-md shadow-cyan-950' onClick={handleadd}> Add </button>

                <button className='float-right rounded-lg bg-cyan-700 w-20 mr-6 shadow-md shadow-cyan-950
                ' onClick={handleDelete}> Delete </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TodoCard
