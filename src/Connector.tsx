import type { SVGProps } from "react";

export function Connector(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3.5a.5.5 0 0 0-1 0v2.793L2.146 8.146A.5.5 0 0 0 2 8.5v5a.5.5 0 0 0 .5.5H4v2.5a.5.5 0 0 0 1 0V14h1v2.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.146-.354L7 6.293V3.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .146.354L8 8.707V13H3V8.707l1.854-1.853A.5.5 0 0 0 5 6.5v-3Zm10 13v-3a.5.5 0 0 1 .146-.354L17 11.293V7h-5v4.293l1.854 1.853A.5.5 0 0 1 14 13.5v3a.5.5 0 0 1-1 0v-2.793l-1.854-1.853A.5.5 0 0 1 11 11.5v-5a.5.5 0 0 1 .5-.5h.5V3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V6h.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.146.354L16 13.707V16.5a.5.5 0 0 1-1 0ZM13 6h3V4h-3v2Z"
      />
    </svg>
  );
}
export default Connector;
