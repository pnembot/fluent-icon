import type { SVGProps } from "react";

export function PersonPillFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm2.879 9l-2.94 2.94a3.623 3.623 0 0 0-.748 4.035c-1.544-.098-2.962-.481-4.056-1.178C3.833 15.967 3 14.69 3 13c0-1.113.903-2 2.009-2h7.87Zm5.475-.353a2.621 2.621 0 0 0-3.708 0l-4 4a2.621 2.621 0 0 0 3.707 3.707l4-4a2.621 2.621 0 0 0 0-3.707Zm-3 .707a1.621 1.621 0 1 1 2.292 2.293L16 15.293L13.707 13l1.646-1.646Zm-1.5 4.292a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default PersonPillFilled;
