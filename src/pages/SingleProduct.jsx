import React from 'react'
import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { customFetch, formatPrice, generatedAmountOption } from '../utils'

import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch.get(`/products/${id}`),
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    )
    return { product: response.data.data }
  }
const SingleProduct = () => {
  const { product } = useLoaderData()
  const { title, image, price, colors, description, company } =
    product.attributes
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="gap-y-8 mt-6 grid lg:grid-cols-2 lg:gap-x-16 ">
        <img
          src={image}
          alt=""
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <p className="text-md font-medium tracking-wider capitalize">
              colors
            </p>
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className={`badge h-6 w-6 mr-1 mt-1 ${
                    color === productColor && 'border-2 border-secondary'
                  }`}
                  onClick={() => setProductColor(color)}
                ></button>
              )
            })}
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">
                Amount
              </h4>
            </label>
            <select
              name="amount"
              id="amount"
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generatedAmountOption(20)}
            </select>
          </div>
          {/* CART BIN */}
          <button
            className="btn btn-secondary mt-6 capitalize"
            onClick={addToCart}
          >
            Add to bag
          </button>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
