import type { SVGProps } from "react";

export function Comma(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.216-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5Z"
      />
    </svg>
  );
}
export default Comma;
