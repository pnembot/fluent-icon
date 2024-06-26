import type { SVGProps } from "react";

export function ListBarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 17h7.5a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H8v4Zm0-5h7.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8H8v4ZM7 8v4H4.5A1.5 1.5 0 0 1 3 10.5v-1A1.5 1.5 0 0 1 4.5 8H7Zm1-1h7.5A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3H8v4ZM7 3v4H4.5A1.5 1.5 0 0 1 3 5.5v-1A1.5 1.5 0 0 1 4.5 3H7Zm0 10v4H4.5A1.5 1.5 0 0 1 3 15.5v-1A1.5 1.5 0 0 1 4.5 13H7Z"
      />
    </svg>
  );
}
export default ListBarFilled;
