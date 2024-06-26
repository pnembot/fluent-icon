import type { SVGProps } from "react";

export function TableDefault(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17ZM7.5 5A2.5 2.5 0 0 0 5 7.5V11h6V5H7.5ZM5 13v6h6v-6H5Zm8 0v6h6v-6h-6Zm8 0v6h6v-6h-6Zm-2 8h-6v6h6v-6Zm2 6h3.5a2.5 2.5 0 0 0 2.5-2.5V21h-6v6Zm0-16h6V7.5A2.5 2.5 0 0 0 24.5 5H21v6Zm-2-6h-6v6h6V5ZM5 21v3.5A2.5 2.5 0 0 0 7.5 27H11v-6H5Z"
      />
    </svg>
  );
}
export default TableDefault;
