"use client"
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Head from "@/components/Head";
import Temp from "@/components/Temp";
import Select from "@/components/Select";
import Tips from "@/app/savings/Tips";
import Footer from "@/components/Footer";

export default function SavingsPg() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <Head  setOpenModal={setOpenModal} name="Savings"/>
          <div className="flex flex-col">
            <div className="flex md:flex-row flex-col">
              <Temp title="Resume" details="Please add savings first" icon="/images/2.png" />
              <Temp title="Key Information" details="Please add savings first" icon="/images/2.png" />
            </div>
            <Tips/>
          </div>
        </div>
      </div>
      {openModal ? (
        <Select openModal={openModal} setOpenModal={setOpenModal} edit="/esavings" addt="/asavings" />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
