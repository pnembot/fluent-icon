import type { SVGProps } from "react";

export function ListBarTreeOffset(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h.268A1.99 1.99 0 0 0 5 9v2a2 2 0 0 0 2 2h.268A1.99 1.99 0 0 0 7 14v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1c0-.597-.262-1.133-.677-1.5c.415-.367.677-.903.677-1.5V9c0-.597-.262-1.134-.677-1.5c.415-.366.677-.903.677-1.5V5a2 2 0 0 0-2-2H5Zm10 9h-5V8h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM9 8v4H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm-1 6a1 1 0 0 1 1-1h2v3H9a1 1 0 0 1-1-1v-1Zm4 2v-3h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3ZM8 7V4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8ZM7 7H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2v3Z"
      />
    </svg>
  );
}
export default ListBarTreeOffset;
