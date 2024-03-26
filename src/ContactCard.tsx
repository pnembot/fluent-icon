import React, { SVGProps } from "react";

export function ContactCard(props: SVGProps<SVGSVGElement>) {
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
        d="M8 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-4 3.199a.95.95 0 0 1 .949-.949H8.05a.95.95 0 0 1 .949.949c0 .847-.577 1.585-1.399 1.791l-.059.015c-.684.17-1.4.17-2.084 0l-.06-.015A1.846 1.846 0 0 1 4 11.699ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM2 5.75C2 4.784 2.784 4 3.75 4h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 16H3.75A1.75 1.75 0 0 1 2 14.25v-8.5ZM3.75 5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75H3.75Z"
      />
    </svg>
  );
}
export default ContactCard;
