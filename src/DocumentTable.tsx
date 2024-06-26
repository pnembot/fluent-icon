import type { SVGProps } from "react";

export function DocumentTable(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 10.5A1.5 1.5 0 0 1 7.5 9h5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 14.5v-4ZM8 15v-2H7v1.5a.5.5 0 0 0 .5.5H8Zm1-3h4v-1.5a.5.5 0 0 0-.5-.5H9v2Zm0 3h3.5a.5.5 0 0 0 .5-.5V13H9v2Zm-1.5-5a.5.5 0 0 0-.5.5V12h1v-2h-.5ZM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6ZM5 4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm9.793 3H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7Z"
      />
    </svg>
  );
}
export default DocumentTable;
