



export default function Header() {


return (
    <div className="header flex items-center justify-between p-4 bg-blue-800 text-white">
      <div className="logo flex items-center gap-2 pl-12 font-bold">
        <p>Skip to the main content</p>
        <p className="ring-2 text-white px-2">A-</p>
        <p className="ring-2 text-white px-2">A</p>
        <p className="ring-2 text-white px-2">A+</p>
      </div>

      <div className="flex">
        <p className="pr-14 font-bold">हिंदी में</p>
      </div>
    </div>
  )
}  