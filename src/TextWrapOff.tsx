import React, { SVGProps } from "react";

export function TextWrapOff(props: SVGProps<SVGSVGElement>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L3.293 4H2.5a.5.5 0 0 0 0 1h1.793l4 4H2.5a.5.5 0 0 0 0 1h6.793l2.532 2.532a.498.498 0 0 0-.179.114l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L11.707 15h2.586l2.853 2.854a.5.5 0 0 0 .708-.708l-15-15ZM13.293 14h-1.586l.647-.646a.498.498 0 0 0 .114-.179l.825.825ZM11.12 9l1 1H16a2 2 0 0 1 .118 3.997l.845.845A3.001 3.001 0 0 0 16 9h-4.879Zm-5-5l1 1H17.5a.5.5 0 0 0 0-1H6.121ZM2 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default TextWrapOff;
