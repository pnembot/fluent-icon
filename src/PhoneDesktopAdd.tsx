import type { SVGProps } from "react";

export function PhoneDesktopAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm2 7.5v-.6a5.507 5.507 0 0 0 1-.657V11a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1H9v-1h3v-2H9v-1h7a1 1 0 0 0 1-1Zm-6.743-9A5.504 5.504 0 0 0 9.6 3H6a1 1 0 0 0-1 1v3H4V4a2 2 0 0 1 2-2h4.257ZM4 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm-2-6A1.5 1.5 0 0 1 3.5 8h3A1.5 1.5 0 0 1 8 9.5v7A1.5 1.5 0 0 1 6.5 18h-3A1.5 1.5 0 0 1 2 16.5v-7ZM3.5 9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3Z"
      />
    </svg>
  );
}
export default PhoneDesktopAdd;
