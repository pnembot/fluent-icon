import type { SVGProps } from "react";

export function DrawerPlay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 9.743V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.207a5.48 5.48 0 0 0-.185 1H6a2 2 0 0 0-2 2h4.207c.099.349.23.683.393 1H4v3h3.5a.5.5 0 0 1 .5.5a2 2 0 1 0 4 0a.5.5 0 0 1 .5-.5H16v-.6a5.507 5.507 0 0 0 1-.657ZM14 17a2 2 0 0 0 2-2v-3h-3.041a3 3 0 0 1-5.918 0H4v3a2 2 0 0 0 2 2h8Zm-.5-7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.757-6.587l2.97 1.65a.5.5 0 0 1 0 .874l-2.97 1.65A.5.5 0 0 1 12 7.15v-3.3a.5.5 0 0 1 .743-.437Z"
      />
    </svg>
  );
}
export default DrawerPlay;
