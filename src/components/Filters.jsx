import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormCheckBox from './FormCheckBox'
import FormInput from './FormInput'
import FormRange from './FormRange'
import FormSelect from './FormSelect'

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, category, company, order, price, shipping } = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search products"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATAGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />

      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />

      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />

      {/* PRICE */}
      <FormRange label="price" name="price" price={price} />

      {/* Free shipping */}
      <FormCheckBox
        label="Free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  )
}

export default Filters
