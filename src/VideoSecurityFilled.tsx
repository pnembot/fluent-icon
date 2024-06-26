import type { SVGProps } from "react";

export function VideoSecurityFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm13 5.664V5.332l2.255-1.27a.5.5 0 0 1 .745.436V11.5a.5.5 0 0 1-.746.435L15 10.665ZM7 13.75h3v.5A3.75 3.75 0 0 1 6.25 18H3.5a.5.5 0 0 1-.5-.5v-1.75a.5.5 0 0 1 .5-.5h2.75A.75.75 0 0 0 7 14.5v-.75Z"
      />
    </svg>
  );
}
export default VideoSecurityFilled;
