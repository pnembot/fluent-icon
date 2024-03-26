import React, { SVGProps } from "react";

export function ContactCardRibbonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16H13v-.354A4.01 4.01 0 0 1 12.126 12H11.5a.5.5 0 0 1 0-1h1.035A3.998 3.998 0 0 1 18 9.535V5.5A1.5 1.5 0 0 0 16.5 4h-13Zm3 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm1.551.75a.95.95 0 0 1 .949.949c0 .847-.577 1.585-1.399 1.791l-.059.015c-.684.17-1.4.17-2.084 0l-.06-.015A1.846 1.846 0 0 1 4 11.699a.95.95 0 0 1 .949-.949H8.05ZM11 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm8 4.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-1 3.465A3.982 3.982 0 0 1 16 17a3.982 3.982 0 0 1-2-.535v2.285a.25.25 0 0 0 .378.215L16 18l1.622.965A.25.25 0 0 0 18 18.75v-2.285Z"
      />
    </svg>
  );
}
export default ContactCardRibbonFilled;
