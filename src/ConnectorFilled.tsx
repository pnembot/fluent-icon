import type { SVGProps } from "react";

export function ConnectorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3a.5.5 0 0 0-.5.5v2.793L2.146 8.146A.5.5 0 0 0 2 8.5v5a.5.5 0 0 0 .5.5H4v2.5a.5.5 0 0 0 1 0V14h1v2.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.146-.354L7 6.293V3.5a.5.5 0 0 0-.5-.5h-2Zm11 14a.5.5 0 0 0 .5-.5v-2.793l1.854-1.853A.5.5 0 0 0 18 11.5v-5a.5.5 0 0 0-.5-.5H17V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V6h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .146.354L13 13.707V16.5a.5.5 0 0 0 .5.5h2ZM13 6V4h3v2h-3Z"
      />
    </svg>
  );
}
export default ConnectorFilled;
