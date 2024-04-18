"use client"
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Head from "@/components/Head";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Footer from "@/components/Footer";

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <Head setOpenModal={setOpenModal} name="Profile" />
          <form>
            <div className="flex flex-col space-x-10 justify-center items-center md:flex-row mb-8">
              <div className="ml-10 flex flex-col w-3/3  text-center space-y-4 md:w-1/3 sm:w-2/3">
                <div className="flex flex-col justify-start p-8  shadow-lg rounded-xl space-y-3">
                  <h3 className="text-2xl font-bold">Personal Info</h3>
                  <Input labname="Name" inname="" type="text" required />
                  <Input inname="" labname="Email" type="email" required />
                  <Input inname="" labname="Password" type="password" required />
                  <label
                    htmlFor="countries"
                    className="text-dBlack font-bold text-left"
                  >
                    Country
                  </label>
                  <select
                    id="countries"
                    className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
                  >
                    <option value="Choose a country">Choose a country</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Venezuela">Venezuela</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {openModal ? (
        <Select openModal={openModal} setOpenModal={setOpenModal} edit="/eprofile" addt="/aprofile"/>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
