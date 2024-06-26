import type { SVGProps } from "react";

export function DocumentBulletListOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4.707L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.241-1.242A2 2 0 0 1 14 18H6a2 2 0 0 1-2-2V4.707Zm11 11l-1.032-1.032A.5.5 0 0 1 13.5 15h-5a.5.5 0 0 1 0-1h4.793l-1-1H8.5a.5.5 0 0 1 0-1h2.793l-1-1H8.5a.5.5 0 0 1 0-1h.793L5 5.707V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.293ZM12.121 10l1 1h.379a.5.5 0 0 0 0-1h-1.379ZM15 8v4.879l1 1V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6c-.521 0-.996.2-1.352.526l.708.709A.996.996 0 0 1 6 3h4v3.5A1.5 1.5 0 0 0 11.5 8H15Zm-9 2.5a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0Zm.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM6 14.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM14.793 7H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7Z"
      />
    </svg>
  );
}
export default DocumentBulletListOff;
