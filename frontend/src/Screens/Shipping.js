import React, { useState } from "react";
import { useCart } from "../Components/ContextReducer";
import "./screens.css"
import { toast } from "react-toastify";
export default function Shipping() {
  const products = useCart();
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [state,setState]=useState("")
  const [city,setCity]=useState("")
  const [zip,setZip]=useState("")
  const [cardName,setCardName]=useState("")
  const [cardNumber,setCardNumber]=useState("")
  const [exp,setExp]=useState("")
  const [cvv,setCvv]=useState("")
  var total = 0;
  products.map((product) => {
    total += product.price * product.qty;
  });
  const handleOrder=()=>{
    console.log(firstName,lastName,email,address,city,state,zip,cardName,cardNumber,exp,cvv)
    toast.success("Order Successfuly Done")
  }
  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="row g-0">
          <div className="shipping-card  mx-5 mt-5 col-xl-3 order-md-2">
              <div className="d-flex flex-row">
                <h6 className="fw-bold">Your Cart</h6>
                <p className="fw-bold ms-auto border rounded px-1 py-1 bg-dark text-white">
                  {products.length}
                </p>
              </div>
              <div className="mt-3">
                <div class="shipping-card card" >
                  <ul class="list-group list-group-flush">
                    {products.map((product) => {
                      return (
                        <>
                          <li class="list-group-item">
                            <div className="d-flex flex-row">
                              <h6 className="fw-bold">{product.title} </h6>
                              <p className="ms-auto fw-bold">
                                Rs: {product.price}*{product.qty} ={" "}
                                {product.price * product.qty}
                              </p>
                            </div>
                          </li>
                        </>
                      );
                    })}
                    <li class="list-group-item">
                      <div className="d-flex flex-row">
                        <h6 className="fw-bold">Total-Price</h6>
                        <p className="ms-auto fw-bold">Rs: {total}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 order-md-1" style={{border : "2px solid black "}}>
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-4 text-uppercase">Delivery Info</h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1n">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                    value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example8">
                    Address
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="select" value={state}
                        onChange={(e)=>setState(e.target.value)}>
                      <option value="">State</option>
                      <option value="U.p">U.p</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="select" value={city}
                        onChange={(e)=>setCity(e.target.value)}>
                      <option value="">City</option>
                      <option value="Varanasi">Varanasi</option>
                      <option value="Muradabad">Muradabd</option>
                      <option value="Ballia">Ballia</option>
                    </select>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    value={zip}
                        onChange={(e)=>setZip(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Zip
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example2">
                    Email
                  </label>
                </div>

                <form>
                  <h3 className="my-5">Payment Info</h3>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="typeText"
                        className="form-control form-control-lg"
                        siez={17}
                        placeholder="1234 5678 9012 3457"
                        minLength={19}
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e)=>setCardNumber(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeText">
                        Card Number
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="typeName"
                        className="form-control form-control-lg"
                        siez={17}
                        placeholder="Cardholder's Name"
                        value={cardName}
                        onChange={(e)=>setCardName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeName">
                        Cardholder's Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="typeExp"
                        className="form-control form-control-lg"
                        placeholder="MM/YYYY"
                        size={7}
                        minLength={7}
                        maxLength={7}
                        value={exp}
                        onChange={(e)=>setExp(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeExp">
                        Expiration
                      </label>
                    </div>
                    <div className="form-outline">
                      <input
                        type="password"
                        id="typeText2"
                        className="form-control form-control-lg"
                        placeholder="●●●"
                        size={1}
                        minLength={3}
                        maxLength={3}
                        value={cvv}
                        onChange={(e)=>setCvv(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeText2">
                        Cvv
                      </label>
                    </div>
                  </div>
                </form>

                <div className="d-flex justify-content-end pt-3">
                  <button
                    type="button"
                    className="btn btn-success btn-lg ms-2"
                    style={{ backgroundColor: "hsl(210, 100%, 50%)" }}
                    onClick={handleOrder}
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
