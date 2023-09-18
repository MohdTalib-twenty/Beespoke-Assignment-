import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatchCart, useCart } from "./ContextReducer";
import categoryData from "../Data/Category";
import Rating from "./Rating";
import { toast } from "react-toastify";
export default function Card({ cardDetails }) {
  let dispatch = useDispatchCart();
  let products = useCart();
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    var x = quantity;
    setQuantity(x + 1);
  };
  const handleDecrease = () => {
    if (quantity == 1) {
      return;
    } else {
      var x = quantity;
      setQuantity(x - 1);
    }
  };
  const handleCart = async () => {
    var user =localStorage.getItem("User");
    if(!user){
      toast.warning("Please Login first")
    }else{
      let product = false;
    console.log("clicked");

    if (products.length > 0) {
      for (const item of products) {
        if (item.title == cardDetails.title) {
          product = true;
          break;
        }
      }
    }
    if (product) {
      alert("Already Added");
    } else {
      await dispatch({
        type: "ADD",
        title: cardDetails.title,
        img: cardDetails.image,
        qty: quantity,
        price: cardDetails.price,
      });
      toast.success("Item Added to Cart")
    }
    }
  };
  return (
    <>
      <div className="card " style={{ width: "22rem", height: "400px" }}>
        <img
          src={cardDetails.image}
          className="card-img-top"
          alt="..."
          style={{ height: "180px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{cardDetails.title} </h5>
          <p>
            <Rating value={cardDetails.rating.rate} text={cardDetails.rating.count} />
          </p>
          <h6 className="mt-2">
            
            Rs:{cardDetails.price}/=
          </h6>
          <div className="d-flex flex-row mt-3">
            <p>
              Qty:
              <button
                className="btn  border  rounded fw-bold mx-2"
                onClick={handleDecrease}
              >
                <AiOutlineMinus />
              </button>
              {quantity}
              <button
                className="btn  border  rounded fw-bold mx-2"
                onClick={handleIncrease}
              >
                <AiOutlinePlus />
              </button>
            </p>
            <span className="ms-auto">
             
              <button className="btn text-white  fw-bold" onClick={handleCart} style={{backgroundColor:"#8b008b	"}}>
                Add to Cart
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
