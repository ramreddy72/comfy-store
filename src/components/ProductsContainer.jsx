import { useLoaderData } from 'react-router-dom'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const ProductsContainer = () => {
  const { products, meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`
  }

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium textarea-md">
          {totalProducts} product{totalProducts > 1 ? 's' : ''}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="submit"
            className={setActiveStyles('grid')}
            onClick={() => setLayout('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type="submit"
            className={setActiveStyles('list')}
            onClick={() => setLayout('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {totalProducts === 0 ? (
        <h4 className="my-8">Sorry, no products matched your search..</h4>
      ) : layout === 'grid' ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  )
}

export default ProductsContainer
