import type { SVGProps } from "react";

export function ScanType(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2ZM5 17a2 2 0 0 1-2-2v-1.5a.5.5 0 0 0-1 0V15a3 3 0 0 0 3 3h1.5a.5.5 0 0 0 0-1H5ZM17 4.5A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM15 17a2 2 0 0 0 2-2v-1.5a.5.5 0 0 1 1 0V15a3 3 0 0 1-3 3h-1.5a.5.5 0 0 1 0-1H15ZM6.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V6h2.5v8H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5V6H13v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5h-7Z"
      />
    </svg>
  );
}
export default ScanType;
