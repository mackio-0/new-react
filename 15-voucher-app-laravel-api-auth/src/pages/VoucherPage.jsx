import React from 'react'
import ContainerComponent from '../components/ContainerComponent'
import Breadcrumb from '../components/Breadcrumb'
import VoucherList from '../components/VoucherList'

const VoucherPage = () => {
  return (
    <section>
        <Breadcrumb currentPageName={"Voucher Module"}/>
        <VoucherList/>
    </section>
  )
}

export default VoucherPage
