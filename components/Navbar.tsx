import Link from "next/link";
import Image from "next/image";
import React from "react";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/logo.png" width={27} height={27} alt="Logo" />
          <p className="nav-logo">
            Cas<span className="text-primary">Per</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              width={27}
              height={27}
              alt={icon.alt}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
