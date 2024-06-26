import type { SVGProps } from "react";

export function DocumentBorderPrint(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18H11a2 2 0 0 1-1.732-1H6.5A1.5 1.5 0 0 1 5 15.5v-11A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V9h.5c.171 0 .338.017.5.05V4.5A2.5 2.5 0 0 0 13.5 2h-7ZM14 4.75V9h-.5c-.171 0-.338.017-.5.05V5H7v10h2v1H6.75a.75.75 0 0 1-.75-.75V4.75A.75.75 0 0 1 6.75 4h6.5a.75.75 0 0 1 .75.75ZM13.5 10a1.5 1.5 0 0 0-1.5 1.5v.5h-.5a1.5 1.5 0 0 0-1.5 1.5V16a1 1 0 0 0 1 1h1v.5a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5V17h1a1 1 0 0 0 1-1v-2.5a1.5 1.5 0 0 0-1.5-1.5H17v-.5a1.5 1.5 0 0 0-1.5-1.5h-2Zm2.5 2h-3v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5Zm-2.5 4h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default DocumentBorderPrint;
