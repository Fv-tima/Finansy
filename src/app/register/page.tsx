import Input from "@/components/Input";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="p-10 text-deepBlue">
      <h1 className="text-5xl font-bold-300 mb-6">Sign Up</h1>
      <div className="flex flex-col">
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
          <Link href="/register" className=" p-3 px-8 pt-3 text-white bg-deepBlue rounded-full baseline hover:bg-lgBlue hover:text-deepBlue flex justify-center mx-auto w-[140px]"
            >
              SIGN UP
          </Link>
        </form>

        <div className="flex flex-col items-center justify-center md:flex-row ">
          <div className="flex flex-col mt-2 items-center space-y-3 md:mt-16 ">
            <p className="font-bold text-dBlack">or Sign Up with</p>
            <div className="flex space-x-3 text-ash mx-auto">
            <div className="flex space-x-2">
              <Image src="/images/Google.png"
                alt="Google"
                width={24}
                height={24} /> <h2>Google</h2>
            </div>
            <div className="flex space-x-2" >
              <Image src="/images/Fbk.png"
                alt="Facebook"
                width={24}
                height={24} /> <h2>Facebook</h2>
            </div>
            <div className="flex space-x-2" >
              <Image src="/images/Apple.png"
                alt="Apple"
                width={24}
                height={24} /> <h2>Apple</h2>
            </div>
            </div>
          </div>
          <div className=" mt-4 flex flex-col space-y-4 md:items-end md:ml-12">
            <Link href="" className="text-deepBlue text-start md:mt-2">
              Are you already a user?
            </Link>
            <Link
              href="/login"
              className="p-3 bgwhite text-deepBlue rounded-full text-center hover:text-lgBlue hover:bg-deepBlue border-solid border-2 "
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
