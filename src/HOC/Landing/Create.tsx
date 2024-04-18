import Image from "next/image";

export default function Create() {
  return (
    <div className="p-10 mx-auto mt-24 text-center bg-tintBlue">
      <h2 className="text-4xl font-bold-300 text-center text-deepBlue">Creating your budget</h2>
      <div className="flex flex-col justify-center mt-14 mx-auto space-x-10 md:flex-row">
        <Image src="/images/Resume.png" 
        alt="Resume"
        width={476}
        height={731}/>
        <div className="flex-col space-y-4 mx-auto md:space-y-8">
          <Image src="/images/Needs.png"
          alt="Needs"
          width={534}
          height={242}  />
          <Image src="/images/Wants.png"
          alt="Wants"
          width={438}
          height={242}  />
        </div>
      </div>
    </div>
  );
}
