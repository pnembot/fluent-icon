import type { SVGProps } from "react";

export function NotebookFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1ZM16 6h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16V13Z"
      />
    </svg>
  );
}
export default NotebookFilled;
