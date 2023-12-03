import React, { useState } from 'react'


function Counter() {
    const [name, set_name] = useState({'fname':'', 'lname':''})
    const [arr, set_arr] = useState([])
  return (
    <div>
        <form>
            <input type="text" value={name.fname} onChange={e => set_name({...name, fname: e.target.value})}/>
            <input type="text" value={name.lname} onChange={e => set_name({...name, lname: e.target.value})}/>

            <h2>{name.fname} ; {name.lname}</h2>

            <ul>
                {
                    arr.map((item)=><li key={item.id}>{item.value}</li>)
                }
            </ul>
        </form>
        <button onClick={()=> set_arr([...arr, {id:arr.length+1, value:arr.length+1}])}>click</button>
    </div>
  )
}

export default Counter