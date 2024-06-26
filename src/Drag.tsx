import type { SVGProps } from "react";

export function Drag(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10.5 3.707V6.5a.5.5 0 0 1-1 0V3.707L8.354 4.854a.5.5 0 1 1-.708-.708l2-2ZM10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm5.854 1.354l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L16.293 9.5H13.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708Zm-5.5 5.5l2-2a.5.5 0 0 0-.708-.708L10.5 16.293V13.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0Zm-8.208-7.5a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 9.5H6.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2Z"
      />
    </svg>
  );
}
export default Drag;
