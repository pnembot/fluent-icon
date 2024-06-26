import type { SVGProps } from "react";

export function ClipboardTextLtrFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3Zm-5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM6 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ClipboardTextLtrFilled;
