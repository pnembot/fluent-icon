import type { SVGProps } from "react";

export function DismissSquareFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.146 1.146a.5.5 0 0 0 0 .708L9.293 10l-2.147 2.146a.5.5 0 0 0 .708.708L10 10.707l2.146 2.147a.5.5 0 0 0 .708-.708L10.707 10l2.147-2.146a.5.5 0 0 0-.708-.708L10 9.293L7.854 7.146a.5.5 0 0 0-.708 0Z"
      />
    </svg>
  );
}
export default DismissSquareFilled;
