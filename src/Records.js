import React, { useEffect, useState } from 'react'

export default function Records() {

    const[record,setRecord]= useState([])
    const[min, setMin] = useState(0)
    const[max, setMax] =useState(10)

        useEffect(()=>{
            try {
                fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res)=>res.json())
                .then((res)=>setRecord(res))        
                
            } catch (error) {
                console.log("Big F",error)
            }

    },[])

    const onClickIncrease =() =>{
        setMin(min+10)
        setMax(max+10)
    }
    const onClickDecrease =() =>{
        setMin(min-10)
        setMax(max-10)

    }

    return (
        <div className='pt4 ma3' style={{display:"grid", justifyContent:"center"}}>
            <div className='flex'>
                <h3 className='pl2'>Sno.</h3>
                <h3 className='pl2 ml5'>Title</h3>
            </div>
            {
                record.slice(min, max).map((rec, i) =>
                <div key={i} className='flex bb bb-bw1'>
                    <div className='i pl2 pt4'>{rec.id}</div>
                    <div className='i ml5 pt4'>{rec.title}</div>
                </div>    
                )
            }
            <div className='tc pv4'>
                <button className='f7 link dim ph3 ml1  pv2 mb2 dib white bg-black' onClick={onClickDecrease}>Previous</button>
                <button className='f7 link dim ph3 ml1  pv2 mb2 dib white bg-black' onClick={onClickIncrease}>Next</button>
            </div>
        </div>
    )
}
