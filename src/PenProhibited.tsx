import React, { SVGProps } from "react";

export function PenProhibited(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.92 2.872a2.975 2.975 0 0 1 4.207 4.207L15 9.207a5.489 5.489 0 0 0-1.215-.2l2.635-2.635a1.975 1.975 0 0 0-2.793-2.793l-9.374 9.375a1.437 1.437 0 0 0-.387.704l-.707 3.183l3.159-.702c.282-.063.54-.205.744-.409l.945-.945c.022.419.09.825.2 1.214l-.438.438a2.518 2.518 0 0 1-1.234.678l-3.926.873a.5.5 0 0 1-.597-.597l.878-3.95c.1-.452.328-.867.655-1.194l9.375-9.375ZM9 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.899A3.484 3.484 0 0 1 10 14.5Zm3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 13.5 18Z"
      />
    </svg>
  );
}
export default PenProhibited;
