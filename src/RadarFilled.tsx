import type { SVGProps } from "react";

export function RadarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.284 3.241L13.19 4.335a6.5 6.5 0 1 0 1.406 10.261a.75.75 0 0 1 1.06 1.06a8 8 0 1 1-1.372-12.415Zm-3.296 3.296l1.163-1.163a5.102 5.102 0 0 0-5.757 8.232a5.1 5.1 0 0 0 7.212 0a.75.75 0 1 0-1.06-1.06a3.6 3.6 0 1 1-1.558-6.009ZM15.78 4.22a.75.75 0 0 1 0 1.06l-4.33 4.331a1.5 1.5 0 1 1-1.06-1.06l4.33-4.331a.75.75 0 0 1 1.06 0Zm1.47 9.03a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM16.5 7.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm1.5 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default RadarFilled;
