import type { SVGProps } from "react";

export function TableSwitch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.854 1.146a.5.5 0 1 0-.708.708L8.293 3H6a3 3 0 0 0-3 3v2.293L1.854 7.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 1 0-.707-.707L4 8.292V6a2 2 0 0 1 2-2h2.293L7.146 5.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2ZM7 12V7h5V4h-1.085a1.506 1.506 0 0 0 0-1H14.5A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-3.585c.323.114.677.114 1 0V12h3Zm-3 2.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3H4v1.5Zm8-1.5H8v3h4v-3Zm2.5 3a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3v3h1.5ZM12 8H8v4h4V8Zm1 0v4h3V8h-3Zm0-4v3h3V5.5a1.5 1.5 0 0 0-1.355-1.493L14.5 4H13Z"
      />
    </svg>
  );
}
export default TableSwitch;
