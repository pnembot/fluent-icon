import type { SVGProps } from "react";

export function PhoneDesktopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M6 2a2 2 0 0 0-2 2v3h2.5A2.5 2.5 0 0 1 9 9.5V13h3v2H9v1h5.5a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6ZM3.5 8A1.5 1.5 0 0 0 2 9.5v7A1.5 1.5 0 0 0 3.5 18h3A1.5 1.5 0 0 0 8 16.5v-7A1.5 1.5 0 0 0 6.5 8h-3Zm.5 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default PhoneDesktopFilled;
