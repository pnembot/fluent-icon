import type { SVGProps } from "react";

export function DocumentHeaderArrowDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.257a5.503 5.503 0 0 1-.657-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.022a5.5 5.5 0 0 1 1 .185V4a2 2 0 0 0-2-2H6Zm1 2a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7Zm12 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.854 2.353l.003.003a.499.499 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L15 15.293V12.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2Z"
      />
    </svg>
  );
}
export default DocumentHeaderArrowDown;
