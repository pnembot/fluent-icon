import type { SVGProps } from "react";

export function ListBar(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a2 2 0 0 0-2 2v1c0 .597.262 1.134.677 1.5A1.995 1.995 0 0 0 3 9v2c0 .597.262 1.133.677 1.5A1.995 1.995 0 0 0 3 14v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1c0-.597-.262-1.133-.677-1.5c.415-.367.677-.903.677-1.5V9c0-.597-.262-1.134-.677-1.5c.415-.366.677-.903.677-1.5V5a2 2 0 0 0-2-2H5ZM4 14a1 1 0 0 1 1-1h2v3H5a1 1 0 0 1-1-1v-1Zm4 2v-3h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8Zm0-4V8h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8ZM7 8v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2v3Zm1 0V4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8Z"
      />
    </svg>
  );
}
export default ListBar;
