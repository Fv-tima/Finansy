"use client"
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Head from "@/components/Head";
import Temp from "@/components/Temp";
import Select from "@/components/Select";
import Footer from "@/components/Footer";
export default function BudgetsPg() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <Head setOpenModal={setOpenModal} name="Budget" />
          <div className="flex md:flex-row flex-col">
            <Temp title="Budget" details="Please add budget first" icon="/images/3.png"/>
            <div className="flex flex-col">
              <Temp title="Key Information" details="Please add budget first" icon="/images/3.png" />
              <Temp title="Needs" details="Please add budget first" icon="/images/3.png" />
              <Temp title="Wants" details="Please add budget first" icon="/images/3.png" />
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <Select openModal={openModal} setOpenModal={setOpenModal} edit="/ebudget" addt="sbudget" />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
