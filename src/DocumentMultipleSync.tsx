import type { SVGProps } from "react";

export function DocumentMultipleSync(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 15 7.414V14a2 2 0 0 1-2 2h-2.207a5.5 5.5 0 0 0 .185-1H13a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 9 6.5V3H6a1 1 0 0 0-1 1v5.022a5.48 5.48 0 0 0-1 .185V4Zm6-.793V6.5a.5.5 0 0 0 .5.5h3.293L10 3.207ZM10.4 17a5.507 5.507 0 0 1-.657 1h3.318A3.94 3.94 0 0 0 17 14.06V9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3h-2.6ZM1 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.468a1.99 1.99 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 0 1-.706-.707A3 3 0 0 1 7 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 4 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.468a1.99 1.99 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 0 1 .706.707a3 3 0 0 1-.997.66Z"
      />
    </svg>
  );
}
export default DocumentMultipleSync;
