import type { SVGProps } from "react";

export function PenDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.92 2.873a2.975 2.975 0 0 1 4.207 4.207L15 9.207A5.5 5.5 0 0 0 8.207 16l-.438.438a2.518 2.518 0 0 1-1.234.678l-3.926.873a.5.5 0 0 1-.597-.597l.878-3.95c.1-.452.328-.867.655-1.194l9.375-9.375ZM18 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L13.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L14.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default PenDismissFilled;
