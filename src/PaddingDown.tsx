import type { SVGProps } from "react";

export function PaddingDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m14.354 11.354l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 .708-.708L9 14.293V4.5a.5.5 0 0 1 1 0v9.793l3.646-3.647a.5.5 0 0 1 .708.708ZM3.5 3a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1h-12Zm0 15a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Zm3 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm4 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm4 0a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Z"
      />
    </svg>
  );
}
export default PaddingDown;
