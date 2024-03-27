import type { SVGProps } from "react";

export function SetTopStackFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M4 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm4.332 2.076l.909 1.738l1.803.216a.375.375 0 0 1 .19.665L9.919 8.744l.446 1.921a.375.375 0 0 1-.557.407L8 9.992l-1.808 1.08a.375.375 0 0 1-.557-.407l.446-1.921l-1.315-1.049a.375.375 0 0 1 .19-.665l1.803-.216l.909-1.738a.375.375 0 0 1 .664 0z"
          fill="currentColor"
        />
        <path
          d="M4.268 14A2 2 0 0 0 6 15h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.732V11a3 3 0 0 1-3 3H4.268z"
          fill="currentColor"
        />
        <path
          d="M6.268 16A2 2 0 0 0 8 17h4a6 6 0 0 0 6-6V9a2 2 0 0 0-1-1.732V11a5 5 0 0 1-5 5H6.268z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default SetTopStackFilled;
