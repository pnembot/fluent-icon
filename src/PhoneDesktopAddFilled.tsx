import type { SVGProps } from "react";

export function PhoneDesktopAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5c1.33 0 2.55-.472 3.5-1.257V11a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1H9v-1h3v-2H9V9.5A2.5 2.5 0 0 0 6.5 7H4V4a2 2 0 0 1 2-2h4.257a5.5 5.5 0 0 0 4.243 9Zm-11-3A1.5 1.5 0 0 0 2 9.5v7A1.5 1.5 0 0 0 3.5 18h3A1.5 1.5 0 0 0 8 16.5v-7A1.5 1.5 0 0 0 6.5 8h-3Zm.5 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default PhoneDesktopAddFilled;
