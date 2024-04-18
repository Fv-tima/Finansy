"use client"
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Temp from "@/components/Temp";
import SelectMod from "@/components/SelectMod"
function Home() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <Head name="Overview" setOpenModal={setOpenModal} />
          <div className="flex md:flex-row flex-col h-screen">
              <Temp title="Savings" details="Please add saving goal first" icon="/images/2.png" />
            <Temp title="Budget" details="Please add budget first" icon="/images/3.png" />
          </div>
          {openModal ? (
        <SelectMod setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
