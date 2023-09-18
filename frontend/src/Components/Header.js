import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
import {BiUserCircle} from 'react-icons/bi'
export default function Header() {
  const cart = useCart();

  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("User");
    Navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#8b008b	"}}>
        <div className="container">
          <Link
            className="navbar-brand fs-1 fst-italic  text-white mx-2"
            to="/"
          >
           <img src={require("../Data/ll.png")} style={{window: "100px"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              {localStorage.getItem("User") ? (
                <>
                
                  
                  <li className="nav-item">
                    <Link
                      className="nav-link btn bg-white  fw-bold  mx-2"
                      to="/cart"
                      style={{color:"#8b008b	"}}
                    >
                      MY CART
                      <span class="badge bg-danger mx-2">{cart.length}</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn bg-white text-danger fw-bold  mx-2"
                      
                      onClick={handleLogout}
                    >
                      LOGOUT
                    </Link>
                  </li>
                  <li className="nav-item mx-5">
                   
                      <BiUserCircle className="fw-bold text-white fs-1 "/><span className="fw-bold text-white mx-1">{JSON.parse(localStorage.getItem("User")).name}</span>
                   
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn bg-white text-success fw-bold  mx-2"
                      to="/login"
                    >
                      LOGIN
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn bg-white text-success fw-bold  mx-2"
                      to="/signup"
                    >
                      SIGNUP
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
