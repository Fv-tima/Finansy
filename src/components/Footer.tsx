import Image from "next/image";
export default function Footer() {
  return (
    <footer className=" mt-8 inset-x-0 bottom-0 flex flex-col-reverse justify-between px-14 py-4 text-ash mx-auto md:flex-row ">
      <p className="md: text-center">
        All copyrights reserved | Des and Dev by Scarlet & Fvtima
      </p>
      <div className="flex justify-center space-x-6">
        <a href="">About Us</a>
        <a href="">Privacy Policy</a>
        <a href="">Contact Us</a>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="">
          <Image src="/images/Fb.png" 
          alt="Fb"
          width={20}
          height={20}/>
        </a>
        <a href="">
          <Image src="/images/insta.png" 
           alt="In"
           width={20}
           height={20}/>
        </a>
        <a href="">
          <Image src="/images/twitter.png" 
           alt="Tw"
           width={20}
           height={20}/>
        </a>
      </div>
    </footer>
  );
}
