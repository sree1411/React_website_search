import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'
import ProductCategory from '../pages/ProductCategory'
import ListOfItems from '../pages/ListOfItems'

const AllRoutes = () => {
  return (
    <main>
       <Routes>
          <Route path='/'  element={<ProductList apiPath="products" />} />
          <Route path='/productdetail/:id'  element={<ProductDetail/>} />
          <Route path='/products/category'  element={<ProductCategory apiPath="products/categories"   />} />
          <Route path="/products/category/:category" element={<ListOfItems />} />


          
          <Route path='*'  element={<PageNotFound/>} />
       </Routes>
    </main>
  )
}

export default AllRoutes