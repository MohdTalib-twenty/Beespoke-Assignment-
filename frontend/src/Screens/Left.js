import React, { useState } from 'react'

export default function Left() {
    const [filterRating,setFilterRating]=useState("all");
    const [filterCategory,setFilterCategory]=useState("all")
    const [filterPrice,setFilterPrice]=useState("all")
    const handleFilter=()=>{
        console.log(filterRating,filterPrice,filterCategory)
    }
  return (
    <>
        
            <div className="container-fluid">
              <div className="row">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3 className="mx-2 fw-bold fs-5 text-success">
                      Filter by Category
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <select className="py-2 px-2 fs-5" value={filterCategory} onChange={(e)=>setFilterCategory(e.target.value)}>
                      <option value="disable"> Select Category</option>
                      <option value="Starter">Starter</option>
                      <option value="Biryani">Biryani</option>
                      <option value="Pizza">Pizza</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3 className="mx-2 fw-bold fs-5 text-success">
                      Filter by Price
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="0-200"
                        onClick={(e)=>setFilterPrice(e.target.value)}
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        0-200
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="200-400"
                        onClick={(e)=>setFilterPrice(e.target.value)}
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        200-400
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Above 400"
                        onClick={(e)=>setFilterPrice(e.target.value)}
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Above 400
                      </label>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3 className="mx-2 fw-bold fs-5 text-success">
                      Filter by Rating
                    </h3>
                  </div>
                  <div className="card-body mx-1" >
                    <select className="py-2 px-2 fs-5" value={filterRating} onChange={(e)=>setFilterRating(e.target.value)}>
                      <option value="disable">Choose Rating</option>
                      <option value="1-Star">1-Star</option>
                      <option value="2-Star">2-Star</option>
                      <option value="3-Star">3-Star</option>
                      <option value="4-Star">4-Star</option>
                      <option value="5-Star">5-Star</option>
                    </select>
                  </div>
                </div>
              </div>
             
              <div className="row ">
                <button
                  className="btn btn-success text-white mt-4"
                  style={{ maxWidth: "300px" }}
                  onClick={handleFilter}
                >
                  Apply
                </button>
              </div>
            </div>
         
    </>
  )
}
