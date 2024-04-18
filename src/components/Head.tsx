import Image from "next/image";


export default function Head({name,setOpenModal}:any) {
  function add() {
    setOpenModal(true);
  }
return (
  <div>
    <div className="p-5 flex flex-row justify-between items-center">
      <h2 className="text-3xl text-deepBlue font-bold-200">{name}</h2>
        <button  onClick={add} className="bg-deepBlue rounded-full p-4">
          <Image src="/images/plus.png"
            alt="add"
            width={21}
            height={21} />
        </button>
    </div>
  </div>
);
}
