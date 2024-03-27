import type { SVGProps } from "react";

export function RouterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 9.5a6.5 6.5 0 0 1 13 0a.5.5 0 0 0 1 0a7.5 7.5 0 0 0-15 0a.5.5 0 0 0 1 0Zm6.5-4a4 4 0 0 0-4 4a.5.5 0 0 1-1 0a5 5 0 0 1 10 0a.5.5 0 0 1-1 0a4 4 0 0 0-4-4ZM7.75 9.25a2.25 2.25 0 1 1 2.75 2.194V13h4a2.5 2.5 0 0 1 0 5h-9a2.5 2.5 0 0 1 0-5h4v-1.556A2.25 2.25 0 0 1 7.75 9.25Z"
      />
    </svg>
  );
}
export default RouterFilled;
