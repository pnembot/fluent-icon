import type { SVGProps } from "react";

export function NotebookErrorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.743A5.5 5.5 0 0 0 3 9.6V4Zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Zm11 1H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5ZM16 9.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm.5 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM5 12.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.125 4a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0Z"
      />
    </svg>
  );
}
export default NotebookErrorFilled;
