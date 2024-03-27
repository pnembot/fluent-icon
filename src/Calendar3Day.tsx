import type { SVGProps } from "react";

export function Calendar3Day(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4Zm-8 2a.5.5 0 0 1 .492.41L7 6.5v7a.5.5 0 0 1-.992.09L6 13.5v-7a.5.5 0 0 1 .5-.5ZM10 6a.5.5 0 0 1 .492.41l.008.09v7a.5.5 0 0 1-.992.09L9.5 13.5v-7A.5.5 0 0 1 10 6Zm3.5 0a.5.5 0 0 1 .492.41L14 6.5v7a.5.5 0 0 1-.992.09L13 13.5v-7a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default Calendar3Day;
