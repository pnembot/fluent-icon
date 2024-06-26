import type { SVGProps } from "react";

export function NotebookSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a2 2 0 0 0-2 2v5.6A5.5 5.5 0 0 1 9.743 18H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 5 7V5Zm11 1h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.468a1.99 1.99 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 0 1-.706-.707A3 3 0 0 1 7 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 4 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.468a1.99 1.99 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 0 1 .706.707a3 3 0 0 1-.997.66Z"
      />
    </svg>
  );
}
export default NotebookSyncFilled;
