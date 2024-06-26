import type { SVGProps } from "react";

export function PrintAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm2 10v-3.1a5.507 5.507 0 0 0 1-.657V13.5a1.5 1.5 0 0 1-1.5 1.5H15v1.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5V15H3.5A1.5 1.5 0 0 1 2 13.5v-5A2.5 2.5 0 0 1 4.5 6H5v-.5A1.5 1.5 0 0 1 6.5 4h2.707a5.48 5.48 0 0 0-.185 1H6.5a.5.5 0 0 0-.5.5V6h3.022a5.5 5.5 0 0 0 .185 1H4.5A1.5 1.5 0 0 0 3 8.5v5a.5.5 0 0 0 .5.5H5v-1.5A1.5 1.5 0 0 1 6.5 11h7a1.5 1.5 0 0 1 1.5 1.5V14h1.5a.5.5 0 0 0 .5-.5ZM6.5 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7Z"
      />
    </svg>
  );
}
export default PrintAdd;
