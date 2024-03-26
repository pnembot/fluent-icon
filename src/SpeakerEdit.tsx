import React, { SVGProps } from "react";

export function SpeakerEdit(props: SVGProps<SVGSVGElement>) {
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
        d="M11.997 3.002c0-.873-1.04-1.327-1.68-.733l-3.87 3.594a.5.5 0 0 1-.34.133H3.5a1.5 1.5 0 0 0-1.5 1.5v5.001a1.5 1.5 0 0 0 1.5 1.5h2.606a.5.5 0 0 1 .34.134l2.834 2.631l.153-.609c.04-.16.092-.317.156-.469l-2.463-2.286a1.5 1.5 0 0 0-1.02-.4H3.5a.5.5 0 0 1-.5-.5V7.496a.5.5 0 0 1 .5-.5h2.606a1.5 1.5 0 0 0 1.02-.401l3.872-3.594v10.941l1-1v-9.94Zm3.965 1.66a7.966 7.966 0 0 1 1.988 4.454a2.88 2.88 0 0 0-1.022-.112a6.966 6.966 0 0 0-1.71-3.674a.5.5 0 0 1 .744-.667Zm-1.2 2.585c.416.72.65 1.495.718 2.272c-.133.094-.26.2-.379.319l-.626.626a4.481 4.481 0 0 0-.578-2.717a.5.5 0 0 1 .865-.5Zm-3.782 8.128l4.828-4.83a1.87 1.87 0 1 1 2.644 2.645l-4.828 4.83a2.196 2.196 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.08l.374-1.497a2.2 2.2 0 0 1 .578-1.021Z"
      />
    </svg>
  );
}
export default SpeakerEdit;
