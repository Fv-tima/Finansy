"use client"
import { useState } from "react"
import SideBar from "@/components/SideBar";
import Head from "@/components/Head";
import Select from "@/components/Select";
import Footer from "@/components/Footer";
import FinTerm from "./FinTerm";
import Def from "./Def";

export default function Glossary() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <Head setOpenModal={setOpenModal} name="Glossary" />
          <div className="flex  flex-col space-y-6 my-4">
            <FinTerm />
            <Def />
          </div>
        </div>
      </div>
      {openModal ? (
        <Select openModal={openModal} setOpenModal={setOpenModal} edit="/eglossary" addt="/aglossary"/>
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
}
