import type { SVGProps } from "react";

export function CheckboxIndeterminate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2.5-1A1.5 1.5 0 0 0 5 6.5v7A1.5 1.5 0 0 0 6.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 5h-7Z"
      />
    </svg>
  );
}
export default CheckboxIndeterminate;
