import type { SVGProps } from "react";

export function DataSunburst(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.942 3.132a.5.5 0 0 1-.208.675a7.034 7.034 0 0 0-2.927 2.927a.5.5 0 1 1-.884-.467a8.034 8.034 0 0 1 3.344-3.344a.5.5 0 0 1 .675.209Zm6.116 0a.5.5 0 0 1 .676-.209a8.034 8.034 0 0 1 3.343 3.344a.5.5 0 0 1-.884.467a7.033 7.033 0 0 0-2.926-2.927a.5.5 0 0 1-.209-.675Zm-9.926 9.926a.5.5 0 0 1 .675.209a7.033 7.033 0 0 0 2.927 2.926a.5.5 0 1 1-.467.884a8.034 8.034 0 0 1-3.344-3.343a.5.5 0 0 1 .209-.676Zm13.737 0a.5.5 0 0 1 .208.676a8.034 8.034 0 0 1-3.343 3.343a.5.5 0 0 1-.467-.884a7.033 7.033 0 0 0 2.926-2.926a.5.5 0 0 1 .676-.209ZM10 5.5a4.56 4.56 0 0 0-.45.023a.5.5 0 0 1-.1-.996a5.502 5.502 0 0 1 5.798 3.823a.5.5 0 1 1-.954.3A4.502 4.502 0 0 0 10 5.5Zm-2.6.2a.5.5 0 0 1-.1.7A4.492 4.492 0 0 0 5.5 10c0 .82.22 1.589.602 2.25a.5.5 0 1 1-.866.5A5.477 5.477 0 0 1 4.5 10c0-1.8.865-3.397 2.2-4.4a.5.5 0 0 1 .7.1Zm7.521 5.323a.5.5 0 0 1 .327.627a5.502 5.502 0 0 1-7.998 3.114a.5.5 0 1 1 .5-.865a4.502 4.502 0 0 0 6.544-2.548a.5.5 0 0 1 .627-.328ZM8.001 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
      />
    </svg>
  );
}
export default DataSunburst;
