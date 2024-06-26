import type { SVGProps } from "react";

export function DocumentSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H9.743A5.5 5.5 0 0 0 4 9.207V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM1 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.468a1.99 1.99 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 0 1-.706-.707A3 3 0 0 1 7 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 4 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.468a1.99 1.99 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 0 1 .706.707a3 3 0 0 1-.997.66Z"
      />
    </svg>
  );
}
export default DocumentSyncFilled;
