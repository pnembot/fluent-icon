import type { SVGProps } from "react";

export function Info(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.492 8.91A.5.5 0 0 0 9.5 9v4.502l.008.09a.5.5 0 0 0 .992-.09V9l-.008-.09Zm.307-2.16a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default Info;
