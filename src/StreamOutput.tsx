import type { SVGProps } from "react";

export function StreamOutput(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.146 2.146a.5.5 0 0 1 .708 0l2.988 2.99a.498.498 0 0 1 0 .729l-2.988 2.989a.5.5 0 0 1-.708-.708L18.293 6H13.5C11.6 6 10 7.6 10 9.5v1C10 13 8 15 5.5 15h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3C7.4 14 9 12.4 9 10.5v-1C9 7 11 5 13.5 5h4.793l-2.147-2.146a.5.5 0 0 1 0-.708ZM2.5 12H5c1.1 0 2-.9 2-2V9c0-3.3 2.7-6 6-6h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H13C9.1 2 6 5.1 6 9v1c0 .6-.4 1-1 1H2.5c-.3 0-.5.2-.5.5s.2.5.5.5Zm12.6-4H14c-1.1 0-2 .9-2 2v1c0 3.3-2.7 6-6 6h-.5c-.3 0-.5.2-.5.5s.2.5.5.5H6c3.9 0 7-3.1 7-7v-1c0-.6.4-1 1-1h1.1c-.1-.3-.1-.7 0-1Z"
      />
    </svg>
  );
}
export default StreamOutput;
