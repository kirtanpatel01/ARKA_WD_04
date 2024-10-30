import React from 'react'
import { FooterHeader } from "./index";

function FooterSection({ title, items }) {
    return (
        <ul className="flex flex-col justify-self-center gap-6 tracking-widest text-gray-600 max-lg:justify-self-start">
          <FooterHeader title={title} className="text-gray-300" />
          {items.map((item) => (
            <li key={item.link} className="hover:text-white">
              <a href={item.link.startsWith("http") ? item.link : `#${item.link}`} 
                 target={item.link.startsWith("http") ? "_blank" : "_self"} 
                 rel="noopener noreferrer" 
                 className="flex gap-4">
                {item.icon && <item.icon className="h-6 w-6" aria-label={item.title} />}
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      );
}

export default FooterSection