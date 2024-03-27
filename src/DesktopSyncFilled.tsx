import type { SVGProps } from "react";

export function DesktopSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a1.982 1.982 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 1 1-.706-.707A3 3 0 0 1 16 3.152V3a.5.5 0 0 1 .5-.5Zm-.876 5.532A3 3 0 0 1 13 7.848V8a.5.5 0 0 1-1 0V6.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a1.982 1.982 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 1 1 .706.707a3 3 0 0 1-.997.66ZM14.5 11c1.33 0 2.55-.472 3.5-1.257V13.5a1.5 1.5 0 0 1-1.5 1.5H13v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H3.5A1.5 1.5 0 0 1 2 13.5v-10A1.5 1.5 0 0 1 3.5 2h6.757a5.5 5.5 0 0 0 4.243 9ZM12 15H8v2h4v-2Z"
      />
    </svg>
  );
}
export default DesktopSyncFilled;
