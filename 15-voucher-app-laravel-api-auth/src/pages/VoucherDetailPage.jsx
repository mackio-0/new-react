import React from "react";
import ContainerComponent from "../components/ContainerComponent";
import Breadcrumb from "../components/Breadcrumb";
import VoucherCard from "../components/VoucherCard";

const VoucherDetailPage = () => {
  return (
    <section>
      <ContainerComponent>
        <Breadcrumb
          currentPageName={"Voucher Detail"}
          links={[{ title: "Voucher Module", path: "/voucher" }]}
        />
        <VoucherCard/>
      </ContainerComponent>
    </section>
  );
};

export default VoucherDetailPage;
