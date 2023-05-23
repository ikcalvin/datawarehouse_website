import React from "react";

import { footerData } from "../data";
import Copyright from "./Copyright";

const { logo, address, email, phone, list1, list2, socialList } = footerData;

const Footer = () => {
  return (
    <footer data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            <a href="">
              <img className="mb-[65px]" src={logo} alt="" />
            </a>
            <div className="max-w-[260px] mb-5 text-primary font-bold">{address}</div>
            <div className="font-light italic">{email}</div>
            <div className="font-light italic">{phone}</div>
          </div>
          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
            <div>
              <div className="font-extrabold text-primary mb-8">About</div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a className="text-primary" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="font-extrabold text-primary mb-8">Help</div>
              <ul className="flex flex-col gap-y-4">
                {list2.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a className="text-primary" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="font-extrabold text-primary mb-8">
                Social Media
              </div>
              <ul className="flex justify-center gap-4">
                {socialList.map((item, idx) => {
                  return (
                    <li
                      className="flex justify-center items-center w-12 h-12 bg-primary/10 rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                      key={idx}
                    >
                      <a className="text-white text-xl hover:text-white" href={item.href}>
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright/>
    </footer>
  );
};

export default Footer;
