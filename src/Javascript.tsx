import type { SVGProps } from "react";

export function Javascript(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 9.5A1.5 1.5 0 0 1 13 8h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H12a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13a1.5 1.5 0 0 1-1.5-1.5v-1Zm-.5-1a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1a1.5 1.5 0 0 0 1.5-1.5v-5ZM3 6v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm3-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}
export default Javascript;
