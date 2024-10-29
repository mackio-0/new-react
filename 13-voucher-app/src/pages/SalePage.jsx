import React from 'react'
import ContainerComponent from '../components/ContainerComponent'
import Breadcrumb from '../components/Breadcrumb'

const SalePage = () => {
  return (
    <section>
      <ContainerComponent>
        <Breadcrumb currentPageName={"Sale Module"}/>
      </ContainerComponent>
    </section>
  )
}

export default SalePage
