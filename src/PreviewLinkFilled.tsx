import type { SVGProps } from "react";

export function PreviewLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 6v1.998h10V6H5Zm6.998 5v3h3v-3h-3ZM2 5.754a2.75 2.75 0 0 1 2.75-2.75h10.5A2.75 2.75 0 0 1 18 5.753v8.5a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 14.253v-8.5ZM4 5.5v2.998a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5Zm6.998 5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5Zm-6.498 0a.5.5 0 0 0 0 1h5.004a.5.5 0 0 0 0-1H4.5ZM4 14a.5.5 0 0 0 .5.5h5.004a.5.5 0 0 0 0-1H4.5a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default PreviewLinkFilled;
