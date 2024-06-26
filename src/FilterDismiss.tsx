import type { SVGProps } from "react";

export function FilterDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.207 7H2.5l-.09.008A.5.5 0 0 0 2.5 8h7.1a5.463 5.463 0 0 1-.393-1ZM12 15.5a.5.5 0 0 0-.5-.5h-5l-.09.008A.5.5 0 0 0 6.5 16h5l.09-.008A.5.5 0 0 0 12 15.5Zm1.5-4.5h-9l-.09.008A.5.5 0 0 0 4.5 12h9l.09-.008A.5.5 0 0 0 13.5 11Zm1-1a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm1.854-6.354a.5.5 0 0 1 0 .708L15.207 5.5l1.147 1.146a.5.5 0 0 1-.708.708L14.5 6.207l-1.146 1.147a.5.5 0 0 1-.708-.708L13.793 5.5l-1.147-1.146a.5.5 0 0 1 .708-.708L14.5 4.793l1.146-1.147a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default FilterDismiss;
