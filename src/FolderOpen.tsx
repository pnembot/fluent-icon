import type { SVGProps } from "react";

export function FolderOpen(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.996 7.073V7a2.5 2.5 0 0 0-2.5-2.5H9.664l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5l.001 8.998a2.5 2.5 0 0 0 2.201 2.482a1.6 1.6 0 0 0 .26.022H15.18a1.5 1.5 0 0 0 1.472-1.214l1.358-7a1.501 1.501 0 0 0-1.014-1.715ZM4.5 4h2.664a.5.5 0 0 1 .3.1l1.734 1.3a.5.5 0 0 0 .3.1h4.998a1.5 1.5 0 0 1 1.5 1.5v.002H5.824a1.5 1.5 0 0 0-1.472 1.214l-1.298 6.676A1.502 1.502 0 0 1 3 14.498V5.5A1.5 1.5 0 0 1 4.5 4Zm.833 4.407a.5.5 0 0 1 .491-.405h10.713a.5.5 0 0 1 .491.595l-1.357 7a.5.5 0 0 1-.491.405H4.463a.5.5 0 0 1-.49-.595l1.36-7Z"
      />
    </svg>
  );
}
export default FolderOpen;
