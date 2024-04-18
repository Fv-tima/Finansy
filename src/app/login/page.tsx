import Input from "@/components/Input"
import Link from "next/link"
import Image from "next/image"

export default function page() {
  return (
    <div className="p-10 text-deepBlue">
      <h1 className="text-5xl font-bold-300 mb-6">Login</h1>
      <div className="flex flex-col space-x-4 items-center justify-center md:flex-row">
        <div className="flex flex-col w-3/3  text-center space-y- md:w-1/3 sm:w-2/3">
          <form>
            <div className="flex flex-col justify-start p-8  shadow-lg rounded-xl space-y-3">
              <h3 className="text-2xl font-bold text-center">
                Enter your Info
              </h3>
              <Input inname="Email" labname="Email" type="email" />
              <Input inname="Password" labname="Password" type="password" />
            </div>
            <div className="flex flex-col my-4">
              <Link href="/" className="text-deepBlue md:text-end sm:text-start">
                Forgot your password?
              </Link>
              <button
                className="p-3 px-8 mt-2 text-white bg-deepBlue rounded-full baseline hover:bg-lgBlue hover:text-deepBlue mx-auto"
              >
                LOG IN
              </button>
            </div>
          </form>
          <p className="font-bold text-dBlack">or Log in with</p>

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
        <div className=" flex flex-col items-center justify-center mt-2 md:mt-12 md:pt-32 space-y-4">
          <Link href="" className="text-deepBlue text-start md:mt-12 md:pt-4">
            Are you a new user?
          </Link>
          <Link
            href="/register"
            className="p-3 px-8 pt-2 bgwhite text-deepBlue rounded-full baseline hover:text-lgBlue hover:bg-deepBlue border-solid border-2 "
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  )
}
