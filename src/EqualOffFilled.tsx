import type { SVGProps } from "react";

export function EqualOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L5.793 6.5H3.75a.75.75 0 0 0 0 1.5h3.543l3.5 3.5H3.75a.75.75 0 0 0 0 1.5h8.543l4.853 4.854a.5.5 0 0 0 .708-.708l-15-15ZM13.62 11.5l1.5 1.5h1.129a.75.75 0 0 0 0-1.5H13.62Zm-5-5l1.5 1.5h6.129a.75.75 0 0 0 0-1.5H8.621Z"
      />
    </svg>
  );
}
export default EqualOffFilled;
