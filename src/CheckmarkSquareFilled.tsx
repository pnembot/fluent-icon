import type { SVGProps } from "react";

export function CheckmarkSquareFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.354 5.354l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9 11.293l3.646-3.647a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default CheckmarkSquareFilled;
