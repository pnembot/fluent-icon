import type { SVGProps } from "react";

export function ListBarTreeOffsetFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 7h7.5A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3H8v4ZM7 3H4.5A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7H7V3Zm3 9h5.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8H10v4ZM9 8H6.5A1.5 1.5 0 0 0 5 9.5v1A1.5 1.5 0 0 0 6.5 12H9V8Zm6.5 9H12v-4h3.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5Zm-7-4H11v4H8.5A1.5 1.5 0 0 1 7 15.5v-1A1.5 1.5 0 0 1 8.5 13Z"
      />
    </svg>
  );
}
export default ListBarTreeOffsetFilled;
