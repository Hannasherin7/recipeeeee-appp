import axios from 'axios'
import React, { useState } from 'react'


export const Add = () => {
    const [data,setData]=useState(
        {
            "image":"",
            "incredients":"",
            "title":"",
            "description":"",
            "type":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
              alert("successfully added")
              
            } else {
              alert("error")
              
            }
          }
        ).catch(
          (error)=>{
            console.log(error.message)
            alert(error.map)
          }
        ).finally()
    }
  return (
    <div>
        <h1><center>ADD RECIPE</center></h1>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">image</label>
                        <input type="text" className="form-control"name='image' value={data.image} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">incredients</label>
                        <input type="text" className="form-control"name='incredients' value={data.incredients} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">title</label>
                    <input type="text" className="form-control"name='title' value={data.title}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">description</label>
                    <input type="text" className="form-control" name='description' value={data.description}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">type</label>
                    <input type="text" className="form-control" name='type'value={data.type}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-success">ADD</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
