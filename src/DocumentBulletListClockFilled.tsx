import type { SVGProps } from "react";

export function DocumentBulletListClockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.475 5.475 0 0 1-1.235-3H8.5a.5.5 0 0 1 0-1h.522a5.48 5.48 0 0 1 .185-1H8.5a.5.5 0 0 1 0-1h1.1c.183-.358.404-.693.657-1H8.5a.5.5 0 0 1 0-1h2.837c.895-.63 1.986-1 3.163-1a5.5 5.5 0 0 1 1.5.207V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 4a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm.5 1.5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Z" />
        <path d="M11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm8 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H15v-2.5Z" />
      </g>
    </svg>
  );
}
export default DocumentBulletListClockFilled;
