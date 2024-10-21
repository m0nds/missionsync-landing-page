import React from "react";

const links = [
  { name: 'About Us', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms', href: '#' }
];

const footer = () => {
  return <div className="bg-black text-white px-[100px] py-6 flex justify-between items-center">
 <div >
        <a className="flex items-center">
          <img src="/images/logo.png" className="object-contain" />
          <span className="font-russo text-lg">MissionSync</span>
        </a>
       </div>

       <div>
       <ul className="space-x-8 flex flex-row">
        <p>© 2024 MissionSync. All rights reserved.</p>
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

  </div>;
};

export default footer;
