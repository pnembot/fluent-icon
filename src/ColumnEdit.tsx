import type { SVGProps } from "react";

export function ColumnEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.5a.5.5 0 0 1 .5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5ZM9 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.475a3.17 3.17 0 0 0-.043.155L9.22 17H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6.943l-1 1V5a1 1 0 0 0-1-1H9Zm6 1v4.943l-1 1V5a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1Zm-4.02 10.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default ColumnEdit;
