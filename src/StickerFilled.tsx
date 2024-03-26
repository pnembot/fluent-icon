import React, { SVGProps } from "react";

export function StickerFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5v-3.083a5.866 5.866 0 0 1-.998.083c-1.087 0-1.914-.272-2.475-.553a4.194 4.194 0 0 1-.64-.39a2.93 2.93 0 0 1-.217-.181l-.015-.014l-.005-.005l-.002-.002l-.002-.001a.5.5 0 0 1 .705-.71l.003.002l.022.02c.022.02.06.051.111.09c.104.078.266.187.487.297c.439.22 1.113.447 2.028.447c.432 0 .81-.051 1.143-.135A2.751 2.751 0 0 1 13.75 11H17V6a3 3 0 0 0-3-3H6Zm1.5 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm6-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-.707 8.414c-.224.225-.497.39-.793.487V13.75c0-.966.784-1.75 1.75-1.75h3.151a1.999 1.999 0 0 1-.487.793l-3.621 3.621Z"
      />
    </svg>
  );
}
export default StickerFilled;
