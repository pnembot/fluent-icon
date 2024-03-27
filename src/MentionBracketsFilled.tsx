import type { SVGProps } from "react";

export function MentionBracketsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v10.5A2.75 2.75 0 0 0 4.75 18h1.5a.75.75 0 0 0 0-1.5h-1.5c-.69 0-1.25-.56-1.25-1.25V4.75c0-.69.56-1.25 1.25-1.25h1.5a.75.75 0 0 0 0-1.5h-1.5Zm7 5.25a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 0 1.5 0V10a4 4 0 1 0-4.238 3.993L9.757 14l.012-.007a3.944 3.944 0 0 0 1.28-.126c.355-.096.75.051.886.391c.172.43-.021.927-.467 1.051A5.402 5.402 0 0 1 10 15.5a5.5 5.5 0 1 1 5.5-5.5v.75c0 .456-.136.881-.37 1.236a5.36 5.36 0 0 1-.13.308v-.13a2.246 2.246 0 0 1-1.75.836a2.247 2.247 0 0 1-1.83-.942a2.5 2.5 0 1 1-.37-4.328a.75.75 0 0 1 .7-.48ZM10 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm8-4.25A2.75 2.75 0 0 0 15.25 2h-1.5a.75.75 0 0 0 0 1.5h1.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-1.5a.75.75 0 0 0 0 1.5h1.5A2.75 2.75 0 0 0 18 15.25V4.75Z"
      />
    </svg>
  );
}
export default MentionBracketsFilled;
