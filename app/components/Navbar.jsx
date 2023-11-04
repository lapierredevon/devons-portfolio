import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-amber-600  pb-5 text-lg text-right">
        <div className="pt-5">
          <Link href="https://github.com/lapierredevon" className="mr-5">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/devon-lapierre/">
            Linkedin
          </Link>
        </div>
      </nav>
    </div>
  );
}
