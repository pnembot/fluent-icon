import type { SVGProps } from "react";

export function DocumentBulletListClock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.257a5.503 5.503 0 0 1-.657-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v1.022a5.5 5.5 0 0 1 1 .185V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM9 14.5c0-.168.008-.335.022-.5H8.5a.5.5 0 0 0 0 1h.522A5.571 5.571 0 0 1 9 14.5Zm.207-1.5c.099-.349.23-.683.393-1H8.5a.5.5 0 0 0 0 1h.707Zm1.05-2c.313-.38.677-.716 1.08-1H8.5a.5.5 0 0 0 0 1h1.757ZM6.5 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM6 12.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm13 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H15v-2.5Z"
      />
    </svg>
  );
}
export default DocumentBulletListClock;
