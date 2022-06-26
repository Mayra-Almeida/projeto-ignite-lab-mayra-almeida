import { Logo } from "./Logo"

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-black border-b border-gray-700 ">
      <Logo />
    </header>
  )
}
