import type { SVGProps } from "react";

export function NotebookArrowCurveDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1 5.5A4.5 4.5 0 0 1 5.502 1A4.5 4.5 0 1 1 1 5.5Zm6.399.896l-.897.897V5.75A2.75 2.75 0 0 0 3.751 3h-.25a.5.5 0 1 0 0 1h.25c.967 0 1.75.784 1.75 1.75v1.543l-.896-.897a.5.5 0 0 0-.707.708L5.65 8.856a.499.499 0 0 0 .706-.002l1.75-1.75a.5.5 0 1 0-.707-.708ZM2.995 10.4c.317.162.651.294 1 .393V16a1 1 0 0 0 1 1h8.003a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2.597a5.51 5.51 0 0 0-.658-1h3.255A2 2 0 0 1 15 4v12a2 2 0 0 1-2 2H4.995a2 2 0 0 1-2.001-2v-5.601ZM16 6h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16V13Z"
      />
    </svg>
  );
}
export default NotebookArrowCurveDown;
