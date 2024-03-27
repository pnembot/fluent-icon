import type { SVGProps } from "react";

export function PhoneDesktop(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9v1h3v2H9v1h5.5a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h1V4a1 1 0 0 1 1-1ZM4.5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM2 9.5A1.5 1.5 0 0 1 3.5 8h3A1.5 1.5 0 0 1 8 9.5v7A1.5 1.5 0 0 1 6.5 18h-3A1.5 1.5 0 0 1 2 16.5v-7ZM3.5 9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3Z"
      />
    </svg>
  );
}
export default PhoneDesktop;
