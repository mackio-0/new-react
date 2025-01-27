import React from "react";
import ContainerComponent from "../components/ContainerComponent";
import ModuleBtn from "../components/ModuleBtn";
import {
  HiCircleStack,
  HiDocumentDuplicate,
  HiMiniComputerDesktop,
} from "react-icons/hi2";
import Logout from "../components/Logout";

const DashboardPage = () => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        <div className="col-span-1 row-span-1">
          <ModuleBtn
            url={"/dashboard/product"}
            name={"Product Module"}
            icon={<HiCircleStack className="size-14" />}
          />
        </div>
        <div className="col-span-1 row-span-1">
          <ModuleBtn
            url={"/dashboard/sale"}
            name={"Sale Module"}
            icon={<HiMiniComputerDesktop className="size-14" />}
          />
        </div>
        <div className="col-span-1 row-span-1">
          <ModuleBtn
            url={"/dashboard/voucher"}
            name={"Voucher Module"}
            icon={<HiDocumentDuplicate className="size-14" />}
          />
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <p>If you finish your work, you can logout here.</p>
        <Logout />
      </div>
    </section>
  );
};

export default DashboardPage;
