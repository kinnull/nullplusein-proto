import React from "react";

export default function Result() {
  const listMarque = [
    { marqueeItem: "70 + Instagram abos:Living_Library_01" },
    { marqueeItem: "400 + Instagram abos:bildungswerk_vielfalt" },
    { marqueeItem: "400 + Zuschauer*innenauf YouTube" },
  ];

  return (
    <div className=" flex w-full justify-evenly space-x-10 overflow-hidden font-Melno">
      {listMarque.map((itemMarque, i) => (
        <p key={i} className=" text-sm text-white  md:text-xl  ">
          {itemMarque.marqueeItem}
        </p>
      ))}
    </div>
  );
}
