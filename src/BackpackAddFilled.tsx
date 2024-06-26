import type { SVGProps } from "react";

export function BackpackAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 4.5a2.5 2.5 0 0 1 5 0v.044a6.006 6.006 0 0 1 3.446 4.648a5.507 5.507 0 0 0-3.064.05c.076-.165.118-.349.118-.542A1.7 1.7 0 0 0 11.3 7H8.7A1.7 1.7 0 0 0 7 8.7A1.3 1.3 0 0 0 8.3 10h3.037A5.526 5.526 0 0 0 9.6 12H4v-2a6.001 6.001 0 0 1 3.5-5.456V4.5Zm3.966-.32a1.5 1.5 0 0 0-2.932 0a6.012 6.012 0 0 1 2.932 0ZM9 14.5a5.5 5.5 0 0 1 .207-1.5H8v1.5a.5.5 0 0 1-1 0V13H4v2a3 3 0 0 0 3 3h3.257A5.477 5.477 0 0 1 9 14.5ZM8.7 8a.7.7 0 0 0-.7.7a.3.3 0 0 0 .3.3h3.4a.3.3 0 0 0 .3-.3a.7.7 0 0 0-.7-.7H8.7ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default BackpackAddFilled;
