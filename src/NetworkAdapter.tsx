import type { SVGProps } from "react";

export function NetworkAdapter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4 6.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5Zm3 0a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5Zm3 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm2.5-.5v5a1.5 1.5 0 0 1-1.5 1.5H13v1.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V12H2v1.5a.5.5 0 0 1-1 0V3H.5a.5.5 0 0 1 0-1H1a1 1 0 0 1 1 1v1h11.5A1.5 1.5 0 0 1 15 5.5ZM7 13h2v-1H7v1Zm5-1h-2v1h2v-1Zm2-6.5a.5.5 0 0 0-.5-.5H2v6h11.5a.5.5 0 0 0 .5-.5v-5Z"
      />
    </svg>
  );
}
export default NetworkAdapter;
