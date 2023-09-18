import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

import categoryData from "../Data/Category";
import Left from "./Left";

export default function Home() {
  const [Products, setProducts] = useState();
  const [FilterProducts, setFilterProducts] = useState([]);
  const [search,setSearch]=useState();
  const [filterRating, setFilterRating] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    if (
      filterCategory !== "all" ||
      filterPrice !== "all" ||
      filterRating !== "all"
      
    ) {
      setFilter(true);
      //console.log(filterCategory, filterPrice, filterRating);
      var tempProducts = Products;
      
      if (filterCategory != "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === filterCategory
        );
      }

      if (filterRating != "all") {
        tempProducts = tempProducts.filter(
          (product) => product.rating.rate >= Number(filterRating)
        );
      }

      if (filterPrice != "all") {
        if (filterPrice != "Above400") {
          tempProducts = tempProducts.filter(
            (product) => product.price <= Number(filterPrice)
          );
        } else {
          tempProducts = tempProducts.filter(
            (product) => product.price > Number(filterPrice)
          );
        }
      }
      console.log(tempProducts);
      setFilterProducts(tempProducts);
    } else {
      setFilter(false);
    }
  };

  
  const fetchProduct = async () => {
    var result = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await result.json();
    console.log(data);
    setProducts(data);
  };
  const handleSearch=()=>{
    if(search){
      setFilter(true);
      var tempProducts = Products;
        tempProducts = tempProducts.filter(
          (product) => product.category === search
        )
      setFilterProducts(tempProducts)

    }else{
      setFilter(false)
    }
  }
  useEffect(() => {
    fetchProduct();
    // fetchCategory();

    //eslint-next-line-disabled
  }, []);
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner">
          <div className="carousel-caption d-none d-md-block" style={{}}></div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/12729103/pexels-photo-12729103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid  mt-3 mx-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-3 col-xl-3 mt-5">
            <div className="container-fluid">
              <div className="row my-4" style={{ maxWidth: "300px" }}>
                <div className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}

                  />
                  <button className="btn fw-bold" style={{border: " 2px solid #8b008b	"}} onClick={handleSearch} >
                    Search
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3
                      className="mx-2 fw-bold fs-5 "
                      style={{ color: "#8b008b	" }}
                    >
                      Filter by Category
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <select
                      className="py-2 px-2 fs-5"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                    >
                      <option value="" disabled>
                        {" "}
                        Select Category
                      </option>
                      <option value="electronics">electronics</option>
                      <option value="jewelery">jewelery</option>
                      <option value="men's clothing">men's clothing</option>
                      <option value="women's clothing">women's clothing</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3
                      className="mx-2 fw-bold fs-5 "
                      style={{ color: "#8b008b	" }}
                    >
                      Filter by Price
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="100"
                        onClick={(e) => setFilterPrice(e.target.value)}
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        0-100
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="200"
                        onClick={(e) => setFilterPrice(e.target.value)}
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label" for="flexCheckChecked">
                        0-200
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Above200"
                        onClick={(e) => setFilterPrice(e.target.value)}
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label" for="flexCheckChecked">
                        Above 200
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3
                      className="mx-2 fw-bold fs-5 "
                      style={{ color: "#8b008b	" }}
                    >
                      Filter by Rating
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <select
                      className="py-2 px-2 fs-5"
                      value={filterRating}
                      onChange={(e) => setFilterRating(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Rating
                      </option>
                      <option value="1">1-Star</option>
                      <option value="2">2-Star</option>
                      <option value="3">3-Star</option>
                      <option value="4">4-Star</option>
                      <option value="5">5-Star</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row ">
                <button
                  className="btn fw-bold text-white mt-4"
                  style={{ maxWidth: "300px", backgroundColor: "#8b008b	" }}
                  onClick={handleFilter}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          {Products && (
            <div className=" col-md-12 col-sm-12 col-lg-9 col-xl-9 ">
              {!filter ? (
                categoryData.map((c) => {
                  return (
                    <>
                      <div className="row mx-3">
                        <h3 className="text-center mt-3 fw-bold cat">
                          {c.category}
                        </h3>
                        <hr className="fw-bold mx-auto  my-2" />
                        {Products.filter(
                          (product) => product.category == c.category
                        ).map((data) => {
                          return (
                            <>
                              <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12 my-3 ">
                                <Card cardDetails={data} />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div className="row mx-3">
                    <h3 className="text-center mt-3 fw-bold">
                      {filterCategory}
                    </h3>
                    {FilterProducts.length > 0 ? (
                      FilterProducts.map((data) => {
                        return (
                          <>
                            <div className="col-md-4  my-3">
                              <Card cardDetails={data} />
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <>
                        <h3 className="text-center text-success fw-bold mt-5">
                          No Product Found
                        </h3>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
