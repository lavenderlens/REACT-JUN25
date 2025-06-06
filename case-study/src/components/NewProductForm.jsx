import { useState, useEffect } from "react";
import "./NewProductForm.css";
import { v4 as id } from "uuid";

export function NewProductForm({ onAddNewProduct }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    if (feedback) {
      // limits the number of times setTimeout fires
      setTimeout(() => {
        setFeedback("");
        console.log("Feedback erased");
      }, 2000);
    }
  }, [feedback]);

  function handleSubmit() {
    if (!description) {
      setFeedback("Description must not be blank");
    } else if (!price) {
      setFeedback("Price must not be blank");
    } else if (description && price && image) {
      onAddNewProduct({ description, price: Number(price), image, id: id() });
    }
    reset();
  }
  function reset() {
    setDescription("");
    setPrice("");
    setImage("");
  }
  const inputStyles = "bg-yellow-100 rounded-lg";
  const submitButtonStyles = "bg-purple-800 rounded-md py-2 px-4 text-white";
  const resetButtonStyles = "bg-yellow-100 rounded-md py-2 px-4";
  return (
    <>
      <h2>New Product Form</h2>
      <main>
        <form>
          <label htmlFor="description">Description:</label>
          <input
            className={inputStyles}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            id="description"
            autoFocus
          />
          <label htmlFor="price">Price: €</label>
          <input
            className={inputStyles}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            id="price"
          />
          <label htmlFor="image">Image (filename):</label>
          <input
            className={inputStyles}
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            id="image"
          />
          <button
            className={submitButtonStyles}
            id="submit"
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>
          <p>{feedback}</p>
          <button
            className={resetButtonStyles}
            id="reset"
            onClick={reset}
            type="button"
          >
            reset
          </button>
        </form>
      </main>
    </>
  );
}
