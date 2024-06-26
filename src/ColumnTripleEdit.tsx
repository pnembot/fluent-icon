import type { SVGProps } from "react";

export function ColumnTripleEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm3 0H4v12h2V4Zm2 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8.943l-1 1V4H9v12h.475a3.17 3.17 0 0 0-.043.155L9.22 17H9a1 1 0 0 1-1-1V4Zm9 0v5.003c-.341.016-.68.092-1 .229V4h-2v6.943l-1 1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-6.02 11.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default ColumnTripleEdit;
