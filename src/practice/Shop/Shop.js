import React, { useState } from "react"
import Product from "./Product"
import CartProduct from "./CartProduct"
import Social from "./Social"
import "./shop.css"
export default function Shop() {
  const [products, setProducts] = useState([
    { id: 1, title: "Album 1", price: 5, img: "imgs-shop/Album 1.png" },
    { id: 2, title: "Album 2", price: 15, img: "imgs-shop/Album 2.png" },
    { id: 3, title: "Album 3", price: 20, img: "imgs-shop/Album 3.png" },
    { id: 4, title: "Album 4", price: 100, img: "imgs-shop/Album 4.png" },
  ])
  const [shoppingCart, setShoppingCart] = useState([])
  const [socials, setSocials] = useState([
    {
      id: 1,
      href: "https://www.youtube.com",
      img: "imgs-shop/YouTube Logo.png",
    },
    {
      id: 2,
      href: "https://www.spotify.com",
      img: "imgs-shop/Spotify Logo.png",
    },
    {
      id: 3,
      href: "https://www.facebook.com",
      img: "imgs-shop/facebook Logo.png",
    },
  ])

  const addToCart = (prodId) => {
    let selectProd = products.find((prod) => {
      return prod.id == prodId
    })
    setShoppingCart([...shoppingCart, selectProd])
  }

  const removeHandler = (cardId) => {
    let newCart = shoppingCart.filter((cart) => {
      return cart.id != cardId
    })
    setShoppingCart(newCart)
  }

  const removeAll = () => {
    setShoppingCart([])
  }

  return (
    <>
      <header class="main-header">
        <nav class="main-nav nav">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">STORE</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </nav>
        <h1 class="band-name band-name-large">SabzLearn Shop</h1>
      </header>
      <section class="container content-section">
        <div class="shop-items">
          {products.map((product) => (
            <Product key={product.id} {...product} adding={addToCart} />
          ))}
        </div>
      </section>
      <section class="container content-section">
        <h2 class="section-header">CART</h2>
        <div class="cart-row">
          <span class="cart-item cart-header cart-column">ITEM</span>
          <span class="cart-price cart-header cart-column">PRICE</span>
          <span class="cart-quantity cart-header cart-column">Doing</span>
        </div>
        <div class="cart-items">
          {shoppingCart.map((card) => (
            <CartProduct {...card} removing={removeHandler} />
          ))}
        </div>
        <button
          class="btn btn-primary btn-purchase"
          type="button"
          onClick={removeAll}
        >
          Empty Cart
        </button>
      </section>
      <footer class="main-footer">
        <div class="container main-footer-container">
          <h3 class="band-name">The Generics</h3>
          <ul class="nav footer-nav">
            {socials.map((social) => (
              <Social {...social} />
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}
