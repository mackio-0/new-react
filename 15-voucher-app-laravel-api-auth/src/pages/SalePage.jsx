import React from 'react'
import ContainerComponent from '../components/ContainerComponent'
import Breadcrumb from '../components/Breadcrumb'
import VoucherInfo from '../components/VoucherInfo'

const SalePage = () => {
  return (
    <section>
        <Breadcrumb currentPageName={"Sale Module"}/>
        <VoucherInfo/>
    </section>
  )
}

export default SalePage
