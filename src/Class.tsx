import type { SVGProps } from "react";

export function Class(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 1-1.732V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2-2v6.5a.5.5 0 0 0 .8.4l1.7-1.275L10.2 8.9a.5.5 0 0 0 .8-.4V2H6Zm1 5.5V3h3v4.5l-1.2-.9a.5.5 0 0 0-.6 0L7 7.5Z"
      />
    </svg>
  );
}
export default Class;
