import type { SVGProps } from "react";

export function FolderPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.932 3.21A1.5 1.5 0 0 0 7.167 3H4.5l-.164.005A2.5 2.5 0 0 0 2 5.5v9l.005.164A2.5 2.5 0 0 0 4.5 17h6.538a3.291 3.291 0 0 1-.038-.5c0-.171.017-.338.05-.5H4.5l-.144-.007A1.5 1.5 0 0 1 3 14.5V7.499l4.071.001l.153-.008a1.5 1.5 0 0 0 .934-.458L9.617 5.5H15.5l.145.007A1.5 1.5 0 0 1 17 7v2.401c.401.233.744.555 1 .94V7l-.005-.164l-.016-.162A2.5 2.5 0 0 0 15.5 4.5H9.667l-1.6-1.2l-.135-.09ZM4.5 4h2.667l.08.006a.5.5 0 0 1 .22.094l1.227.921l-1.26 1.324l-.061.054a.5.5 0 0 1-.302.101L3 6.499V5.5l.007-.144A1.5 1.5 0 0 1 4.5 4Zm13 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default FolderPerson;
