import type { SVGProps } from "react";

export function BoxEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.3 2.48a3.5 3.5 0 0 0-2.6 0L2.943 4.785A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518c.118.047.239.088.36.122l.243-.97a2.526 2.526 0 0 1-.231-.08l-5.758-2.303A.5.5 0 0 1 3 13.822V6.238l6.5 2.6v7.082c.157-.47.42-.899.773-1.25l.227-.228V8.838l6.5-2.6v2.765a2.88 2.88 0 0 1 1 .13V6.176a1.5 1.5 0 0 0-.943-1.392L11.3 2.48Zm-2.228.93a2.5 2.5 0 0 1 1.857 0l5.225 2.09l-2.279.91l-6.154-2.46l1.35-.54ZM6.375 4.487l6.154 2.461L10 7.961L3.846 5.499l2.529-1.011Zm4.605 10.889l4.83-4.83a1.87 1.87 0 1 1 2.644 2.645l-4.83 4.83a2.197 2.197 0 0 1-1.02.577l-1.498.375a.89.89 0 0 1-1.079-1.079l.375-1.498c.096-.386.296-.739.578-1.02Z"
      />
    </svg>
  );
}
export default BoxEdit;
