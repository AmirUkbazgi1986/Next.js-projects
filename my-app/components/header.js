import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-[20px] px-[20px] max-w-5xl w-full m-auto height-[80px] bg-emerald-500 ">
        <h1 className="text-3xl font-bold text-blue-600 ">Welcome Home</h1>
        <nav>
          <ul className="flex items-center gap-[20px]">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
