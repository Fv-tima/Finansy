import Image from "next/image";

export default function Header() {
  return (
    <div className="space-y-12 m-4 mt-2">
      <div className="px-4">
        <h2 className="text-4xl font-bold-300 text-left text-deepBlue mb-2">
          Finansy
        </h2>
        <p className="text-dBlack">Finance made easy</p>
      </div>
      <div className="text-center mx-auto">
        <Image src="/images/logo.png"
        alt="logo"
        width={161}
        height={101}
         className="mx-auto mb-2"  />
        <p className="text-dBlack">Manage your finances simply by</p>
      </div>
    </div>
  );
}
