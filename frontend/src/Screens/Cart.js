import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useCart, useDispatchCart } from "../Components/ContextReducer";
import "./screens.css";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const Navigate=useNavigate()
  const products = useCart();
  let dispatch = useDispatchCart();
  const [qty, setQty] = useState(1);
  var total = 0;
  products.map((product) => {
    total += product.price * product.qty;
  });

  const handleCart = (idx) => {
    console.log(idx);
    dispatch({ type: "REMOVE", index: idx });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col mx-sm-2">
            <table class="table mt-5">
              <thead>
                <tr>
                  <th scope="col ">#</th>
                  <th scope="col ">Detail</th>
                  <th scope="col ">Title</th>
                  <th scope="col ">Quantity</th>
                  <th scope="col ">Total Price</th>
                </tr>
              </thead>
              <tbody className="mt-5">
                {products.map((product, i) => {
                  return (
                    <>
                      <tr className="mt-5">
                        <th scope="row">{i + 1}</th>
                        <td>
                          <img
                            src={product.img}
                            style={{ maxHeight: "70px" }}
                          />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.qty}</td>
                        <td>{product.company}</td>

                        <td>
                          Rs:{product.price}*{product.qty} ={" "}
                          {product.price * product.qty}
                        </td>
                        <td>
                          <ImCross onClick={() => handleCart(i)} />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {products.length > 0 ? (
          <>
            <div className="row mt-5">
              <div className=" special col-xl-4 col-lg-4 col-sm-12 col-md-12 ">
                <hr className="fw-bold" />
                <div className="d-flex flex-row">
                  <h5 className="fw-bold">Product-Counts</h5>
                  <p className="fw-bold ms-auto"> {products.length}</p>
                </div>
                <div className="d-flex flex-row mt-3">
                  <h5 className="fw-bold">Gross-Total</h5>
                  <p className="fw-bold ms-auto">Rs: {total}</p>
                </div>
                <div className="text-center">
                  <button className="btn btn-success px-5 mt-5 " onClick={()=>Navigate("/shipping")}>
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
