import type { SVGProps } from "react";

export function ArrowExpandFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.75 3a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V5.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L5.56 4.5h1.69a.75.75 0 0 0 0-1.5h-3.5Zm0 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L5.56 15.5h1.69a.75.75 0 0 1 0 1.5h-3.5ZM17 3.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69l-2.22 2.22a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5ZM16.25 17a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22h-1.69a.75.75 0 0 0 0 1.5h3.5Z"
      />
    </svg>
  );
}
export default ArrowExpandFilled;
