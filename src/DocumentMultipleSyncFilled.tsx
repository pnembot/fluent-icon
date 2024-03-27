import type { SVGProps } from "react";

export function DocumentMultipleSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.707A5.5 5.5 0 0 1 10.793 16H13.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 9 6.5ZM13.06 18H9.744c.253-.307.474-.642.657-1H13a3 3 0 0 0 3-3V8a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18ZM10 6.5V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5Zm-9 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.468a1.99 1.99 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 0 1-.706-.707A3 3 0 0 1 7 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 4 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.468a1.99 1.99 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 0 1 .706.707a3 3 0 0 1-.997.66Z"
      />
    </svg>
  );
}
export default DocumentMultipleSyncFilled;
