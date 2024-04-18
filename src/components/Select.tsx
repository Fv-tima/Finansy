import Image from "next/image";
import Link from "next/link";

export default function Select({  setOpenModal, edit, addt }:any) {
  function add() {
    setOpenModal(false);
  }
  return (
    <div
      className=" bg-white flex flex-col space-y-8 items-center
      top-[40%] left-[30%]
  md:left-[40%] fixed rounded-lg z-[1000] shadow-lg p-14 pt-10"
    >
      <button
        onClick={add}
        className=" border-solid border-1 border-deepBlue p-3 rounded-full ml-[10rem]"
      >
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
        <Link href={edit} className="flex space-x-2">
          <Image
            src="/images/Edit.png"
            alt="cancel"
            width={21}
            height={19} />
          <h2 className="text-1xl text-lgBlack">Edit</h2>
        </Link>
        <Link href={addt} className="flex space-x-2">
          <Image
            src="/images/plus.png"
            alt="Add"
            width={21}
            height={19} />
          <h2 className="text-1xl text-lgBlack">Add</h2>
        </Link>
      </div>
    </div>
  );
}
