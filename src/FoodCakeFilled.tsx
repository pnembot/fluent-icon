import React, { SVGProps } from "react";

export function FoodCakeFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.996 1.992c-.77 0-1.279.541-1.568 1.027c-.294.493-.45 1.07-.471 1.442c-.041.74.07 1.388.439 1.856c.384.488.96.675 1.6.675c.649 0 1.223-.209 1.605-.697c.369-.472.488-1.115.44-1.839c-.023-.352-.181-.926-.474-1.421c-.287-.485-.796-1.043-1.57-1.043ZM3.011 9.79l3.203 2.94a1 1 0 0 0 1.424-.073l.866-.975a2 2 0 0 1 2.992 0l.865.975a1 1 0 0 0 1.424.073l3.204-2.94A2 2 0 0 0 15 8H5a2 2 0 0 0-1.99 1.79ZM17 11.137l-2.539 2.33a2 2 0 0 1-2.847-.146l-.866-.976a1 1 0 0 0-1.496 0l-.866.976a2 2 0 0 1-2.848.146L3 11.137V16h-.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H17v-4.863Z"
      />
    </svg>
  );
}
export default FoodCakeFilled;