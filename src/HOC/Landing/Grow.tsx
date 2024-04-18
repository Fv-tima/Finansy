import Image from "next/image";

export default function Grow() {
  return (
    <div className="p-10 mx-auto mt-24 text-center bg-tintBlue">
      <h2 className="text-4xl font-bold-300 text-center text-deepBlue">
        Grow your savings
      </h2>
      <div className="flex flex-col justify-center mt-14 space-x-10 md:flex-row">
      <Image src="/images/Res2.png"  
      alt="Res2"
      width={481}
      height={324}/>
      <Image src="/images/Key.png"  
      alt="key"
      width={469}
      height={324}/>
      </div>
    </div>
  );
}
