import type { SVGProps } from "react";

export function FormMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        <path d="M6.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z" />
        <path d="M6 3h6a3 3 0 0 1 3 3v6a2.987 2.987 0 0 1-1.262 2.445A2.98 2.98 0 0 1 12 15H6a2.987 2.987 0 0 1-2.445-1.262A2.986 2.986 0 0 1 3 12V6a3 3 0 0 1 3-3Zm-.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm3-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z" />
        <path d="M5.764 16c.55.614 1.348 1 2.236 1h4.5a4.5 4.5 0 0 0 4.5-4.5V8c0-.888-.386-1.687-1-2.236V12.5a3.5 3.5 0 0 1-3.5 3.5H5.764Z" />
      </g>
    </svg>
  );
}
export default FormMultipleFilled;
