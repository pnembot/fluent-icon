import type { SVGProps } from "react";

export function FormNewFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 9.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM6.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.47 5.47 0 0 0-2.5-.6h-5a.5.5 0 0 0 0 1h1.837A5.493 5.493 0 0 0 9 14.5c0 .9.216 1.75.6 2.5H6a3 3 0 0 1-3-3V6Zm2.5-1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM8 13.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Zm11 1a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default FormNewFilled;
