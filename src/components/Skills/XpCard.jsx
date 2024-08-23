import React from "react";

export default function XpCard({ name, icon, bgColor }) {
  return (
    <div
      className="h-[210px] min-w-[390px] rounded-3xl px-10 flex flex-col justify-center gap-y-2"
      style={{ backgroundColor: bgColor }}
    >
      <img src={icon} height={50} width={50} />
      <div className="text-2xl text-gray-900 font-bold">{name}</div>
    </div>
  );
}
