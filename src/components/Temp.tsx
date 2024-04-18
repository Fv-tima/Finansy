import Image from "next/image"
export default function Temp({ title, details, icon }: any) {

    return (
        <div className='shadow-lg p-5 m-5 rounded-lg md:w-[400px] w-[240px] md:min-h-[200px]'>
            <h2 className="text-2xl text-deepBlue font-bold">
                {title}
            </h2>
            <div className="flex flex-col justify-center items-center  h-full">
                <Image src={icon}
                    className="my-4 mx-auto"
                    alt="Icon"
                    width={21}
                    height={21} />
                <div className="flex justify-center items-center w-full">
                    <p className="lgBlack">{details}</p>
                </div>
            </div>
        </div>
    )
}
