import type { SVGProps } from "react";

export function BoxCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.3 2.48a3.5 3.5 0 0 0-2.6 0L2.943 4.785A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518a3.5 3.5 0 0 0 1.376.25a5.495 5.495 0 0 1-.614-1.058a2.49 2.49 0 0 1-.39-.12l-5.758-2.303A.5.5 0 0 1 3 13.822V6.238l6.5 2.6v3.367a5.51 5.51 0 0 1 1-1.48V8.837l6.5-2.6v3.361c.358.183.693.404 1 .658v-4.08a1.5 1.5 0 0 0-.943-1.393L11.3 2.48Zm-2.228.93a2.5 2.5 0 0 1 1.857 0l5.225 2.09l-2.279.91l-6.154-2.46l1.35-.54ZM6.375 4.487l6.154 2.461L10 7.961L3.846 5.499l2.529-1.011ZM14.5 18.999a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-1-3.707l2.646-2.646a.5.5 0 0 1 .708.707l-3 3a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.707l.646.646Z"
      />
    </svg>
  );
}
export default BoxCheckmark;
