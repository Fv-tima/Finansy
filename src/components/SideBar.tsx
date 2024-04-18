import Link from "next/link";
import Image from "next/image";

export default function SideBar() {

  return (
    <div className="fixed top-0 left-0 h-70 md:w-[12rem] w-20 m-0 flex flex-col bg-White rounded shadow-lg ">
      <div className="text-lgBlack text-xl p-4 space-x-4 ">
      <Link
          href="/"
          className=" flex items-center duration-300 cursor-pointer  text-deepBlue"
        >
          <Image src="/images/logo.png" alt="logo"
          width={80}
          height={80}/>
          <h1 className="text-lgBlack text-1.5xl hidden md:block font-bold ">Finasy</h1>
        </Link>
        <SideLink to="/home" img="/images/Home.svg" alt="logo" title="Home" />
        <SideLink to="/budget" img="/images/1.svg" alt="budget" title="Budgets" />
        <SideLink to="/savings" img="/images/3.svg" alt="savings" title="Savings" />
        <SideLink to="/profile" img="/images/4.svg" alt="profile" title="Profile" />
        <SideLink to="/glossary" img="/images/5.svg" alt="glossary" title="Glossary" />
        <div className="p-2 mt-3 md:mt-16 flex flex-col md:flex-row  items-center cursor-pointer text-deepBlue">
          <Image src="/images/Lg.png"
            alt="Log out"
            width={19}
            height={19} />
          <h1 className="text-lgBlack ml-3 hidden md:block">Log out</h1>
        </div>
      </div>
    </div>
  );
}



function SideLink({ to, title, img, alt }: any) {
  return (
    <Link
      href={to}
      className="p-2 mt-3 flex flex-col md:flex-row  items-center justify-start hover:rounded  duration-300 cursor-pointer hover:bg-lgBlue text-deepBlue focus-visible:bg-lgBlue"
    >
      <Image src={img}
        alt={alt}
        width={24}
        height={24} />
      <h1 className="text-lgBlack hover:text-deepBlue ml-3 hidden md:block">
        {title}
      </h1>
    </Link>
  )
}
