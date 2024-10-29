import React from 'react'
import ContainerComponent from '../components/ContainerComponent'
import Breadcrumb from '../components/Breadcrumb'
import VoucherList from '../components/VoucherList'

const VoucherPage = () => {
  return (
    <section>
      <ContainerComponent>
        <Breadcrumb currentPageName={"Voucher Module"}/>
        <VoucherList/>
      </ContainerComponent>
    </section>
  )
}

export default VoucherPage
