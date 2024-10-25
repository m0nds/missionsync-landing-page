import React from "react";

const links = [
  { name: "About Us", href: "#" },
  { name: "Security", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms", href: "#" },
];

const footer = () => {
  return (
    <div className="bg-black text-white px-8 lg:px-24 py-6 flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center">
      <div className="pb-14 lg:pb-0">
        <a href="/" className="flex gap-1 items-center">
          <img src="/images/logo.png" alt="" className="object-contain" />
          <span className="font-russo text-lg">MissionSync</span>
        </a>
      </div>

      <div>
        <ul className=" flex flex-col-reverse gap-8 lg:flex-row">
          <p className="mb-20 lg:mb-0">© 2024 MissionSync. All rights reserved.</p>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className=" hover:text-purple-400 text-md transition duration-300 ease-in-out"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default footer;
