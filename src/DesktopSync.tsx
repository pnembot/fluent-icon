import type { SVGProps } from "react";

export function DesktopSync(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a1.982 1.982 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 1 1-.706-.707A3 3 0 0 1 16 3.152V3a.5.5 0 0 1 .5-.5Zm-.876 5.532A3 3 0 0 1 13 7.848V8a.5.5 0 0 1-1 0V6.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a1.982 1.982 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 1 1 .706.707a3 3 0 0 1-.997.66ZM17 13v-2.6a5.507 5.507 0 0 0 1-.657V13a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.257A5.504 5.504 0 0 0 9.6 3H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Zm-5 2H8v2h4v-2Z"
      />
    </svg>
  );
}
export default DesktopSync;
