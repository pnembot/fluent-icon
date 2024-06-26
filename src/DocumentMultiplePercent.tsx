import type { SVGProps } from "react";

export function DocumentMultiplePercent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 15 7.414V14a2 2 0 0 1-2 2h-2.17a2.997 2.997 0 0 0-.594-1H13a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 9 6.5V3H6a1 1 0 0 0-1 1v5.764a2.998 2.998 0 0 0-1-.593V4Zm6-.793V6.5a.5.5 0 0 0 .5.5h3.293L10 3.207ZM8 15a2 2 0 1 1 .002 3.998A2 2 0 0 1 8 15Zm-1 2a1 1 0 0 0 .997 1h.006A1 1 0 1 0 7 17Zm4 0c0 .35-.06.687-.17 1h2.23A3.94 3.94 0 0 0 17 14.06V9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3h-2Zm-8.146.854a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708l-6 6ZM5 12a2 2 0 1 1-4 0a2 2 0 1 1 4 0Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default DocumentMultiplePercent;
