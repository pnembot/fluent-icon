import type { SVGProps } from "react";

export function ClipboardTaskAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2a1.5 1.5 0 0 0-1.415 1H3.5A1.5 1.5 0 0 0 2 4.5v12A1.5 1.5 0 0 0 3.5 18h6.757A5.5 5.5 0 0 1 14 9.022V4.5A1.5 1.5 0 0 0 12.5 3h-1.585A1.5 1.5 0 0 0 9.5 2h-3ZM6 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4.854 6.354l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7 12.293l3.146-3.147a.5.5 0 0 1 .708.708ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default ClipboardTaskAddFilled;
