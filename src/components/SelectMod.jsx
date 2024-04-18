import Link from "next/link";
import Image from "next/image";

export default function SelectMod({setOpenModal }) {
  function add() {
    setOpenModal(false);
  }
  return (
    <div
      className=" bg-white flex flex-col space-y-8 items-center
      top-[40%] left-[30%]
  md:left-[40%] fixed rounded-lg z-[1000] p-[20px] shadow-lg"
    >
      <button className="border-2 border-solid border-deepNlue p-3 rounded-full ml-[10rem]">
        <Image
          src="/images/4.png"
          alt="cancel"
          width={21}
          height={19}
          onClick={add}
        />
      </button>
      <h2 className="text-1xl font-bold text-dBlack">Select section</h2>
      <div className="flex space-x-8">
        <Link href="/budget" className="flex space-x-2">
          <Image src="/images/Bud.png" alt="budget" width={21} height={19} />
          <h2 className="text-1xl text-lgBlack">Budget</h2>
        </Link>
        <Link href="/records" className="flex space-x-2">
          <Image src="/images/Rec.png" alt="Records" width={21} height={19} />
          <h2 className="text-1xl text-lgBlack">Records</h2>
        </Link>
      </div>
      <Link href="/savings" className="flex space-x-2">
        <Image src="/images/Sav.png" alt="savings" width={21} height={19} />
        <h2 className="text-1xl text-lgBlack">Savings</h2>
      </Link>
    </div>
  );
}
