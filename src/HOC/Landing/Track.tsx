import Image from "next/image";

export default function Track() {
  return (
    <div className="p-10 mx-auto mt-24 text-center">
      <h2 className="text-4xl font-bold-300 text-center text-deepBlue">
        Tracking Your spending
      </h2>
      <div className="flex flex-col justify-center mt-14  space-x-10 md:flex-row">
      <Image src="/images/Exp.png" 
      alt="Exp"
      width={477}
      height={349} />
      <Image src="/images/Tran.png" 
      alt="Tran"
      width={469}
      height={542} />
      </div>
    </div>
  );
}
