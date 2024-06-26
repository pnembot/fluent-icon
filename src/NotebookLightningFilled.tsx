import type { SVGProps } from "react";

export function NotebookLightningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.743A5.5 5.5 0 0 0 3 9.6V4Zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Zm11 1H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5ZM16 9.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm.5 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-1.131-3.66h-.606c-.187 0-.315-.202-.242-.386l1.096-2.783A.263.263 0 0 1 4.86 12h1.828c.18 0 .307.186.25.366l-.309.979a.25.25 0 0 0 .239.325h.236c.359 0 .532.464.27.723l-2.565 2.53c-.192.19-.498-.001-.435-.27l.238-1.006a.25.25 0 0 0-.243-.307Z"
      />
    </svg>
  );
}
export default NotebookLightningFilled;
