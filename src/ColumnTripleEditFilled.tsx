import type { SVGProps } from "react";

export function ColumnTripleEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm5 0a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h.22l.212-.845a3.19 3.19 0 0 1 .84-1.485L12 12.943V4a1 1 0 0 0-1-1H9Zm8 1v5.003a2.86 2.86 0 0 0-1.898.838L13 11.943V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-6.02 11.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default ColumnTripleEditFilled;
