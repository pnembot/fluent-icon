import type { SVGProps } from "react";

export function TrayItemRemove(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3Zm4 0h-3v2h3V3Zm-1.854 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L14 8.707V14.5a.5.5 0 0 1-1 0V8.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2ZM4 12a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Zm4 0H5v2h3v-2Zm-5.5 1a.5.5 0 0 1 .5.5V15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 1 0V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default TrayItemRemove;
