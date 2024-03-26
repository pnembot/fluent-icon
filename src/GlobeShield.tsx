import React, { SVGProps } from "react";

export function GlobeShield(props: SVGProps<SVGSVGElement>) {
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
        d="M10 18c.492 0 .975-.044 1.442-.13a5.855 5.855 0 0 1-.755-1.077c-.233.14-.465.207-.687.207c-.657 0-1.407-.59-2.022-1.908A9.254 9.254 0 0 1 7.42 13.5H10v-1H7.206A14.87 14.87 0 0 1 7 10c0-.883.073-1.725.206-2.5h5.588c.096.561.161 1.157.19 1.779a6.32 6.32 0 0 0 .867-.74c.025-.026.051-.05.078-.074c-.031-.33-.072-.651-.122-.965h2.733c.21.55.354 1.132.419 1.738c.31.224.662.429 1.039.57A8 8 0 1 0 10 18Zm0-15c.657 0 1.407.59 2.022 1.908c.217.466.406 1.002.559 1.592H7.419c.153-.59.342-1.126.56-1.592C8.592 3.59 9.342 3 10 3ZM7.072 4.485A10.502 10.502 0 0 0 6.389 6.5H3.936a7.022 7.022 0 0 1 3.778-3.118c-.241.33-.456.704-.642 1.103ZM6.192 7.5A15.97 15.97 0 0 0 6 10c0 .87.067 1.712.193 2.5H3.46A6.984 6.984 0 0 1 3 10c0-.88.163-1.724.46-2.5h2.733Zm.197 6c.176.743.407 1.422.683 2.015c.186.399.401.773.642 1.103A7.022 7.022 0 0 1 3.936 13.5H6.39Zm5.897-10.118A7.021 7.021 0 0 1 16.064 6.5H13.61a10.504 10.504 0 0 0-.683-2.015a6.635 6.635 0 0 0-.642-1.103Zm6.215 7.583c-1.37-.193-2.486-1.134-3.066-1.726a.624.624 0 0 0-.87 0c-.58.592-1.695 1.533-3.066 1.726c-.274.038-.499.259-.499.535V14c0 3.468 3.182 4.727 3.87 4.959a.4.4 0 0 0 .26 0C15.818 18.727 19 17.469 19 14v-2.5c0-.276-.225-.497-.499-.535Z"
      />
    </svg>
  );
}
export default GlobeShield;
