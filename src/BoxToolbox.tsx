import type { SVGProps } from "react";

export function BoxToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.3 2.48a3.5 3.5 0 0 0-2.6 0L2.943 4.785A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518c.1.04.2.075.303.105A2.542 2.542 0 0 1 9 17.5v-.94l-5.686-2.273A.5.5 0 0 1 3 13.822V6.238l6.5 2.6v3.161a2.509 2.509 0 0 1 1-.792v-2.37L17 6.239V9.5a2.5 2.5 0 0 1 .958 1.542l.042.008V6.176a1.5 1.5 0 0 0-.943-1.392L11.3 2.48Zm-2.228.93a2.5 2.5 0 0 1 1.857 0l5.225 2.09l-2.279.91l-6.154-2.46l1.35-.54ZM6.375 4.487l6.154 2.461L10 7.961L3.846 5.499l2.529-1.011ZM12 11.999v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm3.5-1h-2a.5.5 0 0 0-.5.5v.5h3v-.5a.5.5 0 0 0-.5-.5Zm1.5 5.5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0Z"
      />
    </svg>
  );
}
export default BoxToolbox;
