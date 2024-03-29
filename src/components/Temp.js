import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pdpActions } from "../redux/pdp-slice";

function Temp() {
  const dispatch = useDispatch();
  const storeRef = useRef();
  const idRef = useRef();
  const fetchedData = useSelector((state) => state.pdp.fetchedData);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    console.log(fetchedData);
    if (fetchedData.data) {
      setQuantity(fetchedData.data.quantity);
    }
  }, [fetchedData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const storeVal = storeRef.current.value;
    const idVal = idRef.current.value;
    const response = await fetch(" https://dev.nazdik.in/api/product/show", {
      method: "POST",
      body: JSON.stringify({
        store: storeVal,
        product_id: idVal,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(pdpActions.fetchData(data));
  };

  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const decrementHandler = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Store</label>
        <input type="text" ref={storeRef} />
        <label>Product_ID</label>
        <input type="text" ref={idRef} />
        <button type="submit">POST</button>
      </form>
      {fetchedData.message ? (
        <>
          <div>
            <h2>{fetchedData.data.category.name}</h2>
            <p>Name: {fetchedData.data.name}</p>
            <p>SKU : {fetchedData.data.sku}</p>
            <p>{fetchedData.data.description}</p>
            <p>Price : {fetchedData.data.price} $</p>
            <p>
              Quantity :
              <br />
              <button onClick={incrementHandler}> Increment </button>
              <br />
              {quantity} <br />
              <button onClick={decrementHandler}>Decrement</button>
            </p>
            {fetchedData.data.images.map((image) => (
              <img src={image.images} key={image.id} alt="something" />
            ))}
            {/* <img src={fetchedData.data.images[0].images} alt="something" /> */}
          </div>
        </>
      ) : (
        <p> Click POST...</p>
      )}
    </div>
  );
}

export default Temp;
