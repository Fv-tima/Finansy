
export default function Input({inname, labname, type}:any) {
  return (
    <div className="flex flex-col space-y-4">
      <label htmlFor="email" className="text-dBlack font-bold text-left">{labname}</label>
      <input
        type={type}
        placeholder={inname}
        className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack"
      />
    </div>
  )
}
