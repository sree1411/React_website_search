import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'
import ProductCategory from '../pages/ProductCategory'

const AllRoutes = () => {
  return (
    <main>
       <Routes>
          <Route path='/'  element={<ProductList apiPath="products" />} />
          <Route path='/productdetail/:id'  element={<ProductDetail/>} />
          <Route path='/products/category'  element={<ProductCategory apiPath="products/categories"/>} />
          <Route path='*'  element={<PageNotFound/>} />
       </Routes>
    </main>
  )
}

export default AllRoutes