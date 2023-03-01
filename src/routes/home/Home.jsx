import React from 'react'
import CategoryList from '../../components/category-list/CategoryList'
import Coupon from '../../components/coupon/Coupon'
import MainProducts from '../../components/main-products/MainProducts'

const Home = () => {
  return (
    <>
      <main>
        <CategoryList/>
        <Coupon/>
        <MainProducts/>
      </main>
    </>
  )
}

export default Home