import type { SVGProps } from "react";

export function FireplaceFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a7 7 0 0 0-7 7v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a7 7 0 0 0-7-7ZM4 9a6 6 0 1 1 12 0v5h-3.505c.62-.616 1.005-1.481 1.005-2.5c0-1.132-.627-1.968-1.171-2.694l-.128-.17c-.591-.8-1.101-1.566-1.101-2.709a.5.5 0 0 0-.759-.428c-1.398.846-1.448 2.174-1.39 2.992c-.12-.101-.258-.222-.418-.365a.5.5 0 0 0-.666 0l-.002.002l-.002.002l-.005.004l-.015.015a3.379 3.379 0 0 0-.209.222a4.53 4.53 0 0 0-.465.652A4.849 4.849 0 0 0 6.5 11.5c0 1.019.385 1.884 1.005 2.5H4V9Zm-1.5 7a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
      />
    </svg>
  );
}
export default FireplaceFilled;
