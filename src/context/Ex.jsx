import React from 'react'
import {app} from '../FireBase'
import { getDatabase,ref,set } from 'firebase/database'

function Ex() {

    const addDemoData = (userId,name,phone) => {
        const db = getDatabase(app)
        set(ref(db, 'student/'+userId), {
            name: name,
            phone: phone
        })
    } 

  return (
    <div>
      <h1>Add Data on click this btn</h1>
      <button onClick={()=>{addDemoData(2,'kiran',9512412)}}>Add new data</button>
    </div>
  )
}

export default Ex
