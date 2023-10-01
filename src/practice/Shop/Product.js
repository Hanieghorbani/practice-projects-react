import React from "react"

export default function Product(props) {
  const addHandler = (id) => {
    props.adding(id)
  }

  let { id, title, img, price } = props
  return (
    <div class="shop-item">
      <span class="shop-item-title">{title}</span>
      <img class="shop-item-image" src={img} />
      <div class="shop-item-details mt-2">
        <span class="shop-item-price">{price}$</span>
        <button
          class="btn btn-primary shop-item-button mt-0 fs-6"
          type="button"
          onClick={() => addHandler(id)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
