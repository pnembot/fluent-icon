import type { SVGProps } from "react";

export function BarcodeScanner(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5A2.5 2.5 0 0 1 4.5 3h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 0 3 5.5v1a.5.5 0 0 1-1 0v-1Zm12-2a.5.5 0 0 1 .5-.5h1A2.5 2.5 0 0 1 18 5.5v1a.5.5 0 0 1-1 0v-1A1.5 1.5 0 0 0 15.5 4h-1a.5.5 0 0 1-.5-.5ZM2.5 13a.5.5 0 0 1 .5.5v1A1.5 1.5 0 0 0 4.5 16h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 1 2 14.5v-1a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1h1a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 .5-.5Zm-12-7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2.5-.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z"
      />
    </svg>
  );
}
export default BarcodeScanner;
