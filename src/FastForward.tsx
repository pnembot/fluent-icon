import type { SVGProps } from "react";

export function FastForward(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.018 5.486a1 1 0 0 1 1.592-.806l5.88 4.311a1.25 1.25 0 0 1 0 2.017l-5.88 4.311a1 1 0 0 1-1.592-.806v-3.16L4.61 15.319a1 1 0 0 1-1.592-.806V5.486A1 1 0 0 1 4.61 4.68l5.408 3.966v-3.16Zm6.88 4.312l-5.88-4.312v9.027l5.88-4.312a.25.25 0 0 0 0-.403Zm-7 0l-5.88-4.312v9.027l5.88-4.312a.25.25 0 0 0 0-.403Z"
      />
    </svg>
  );
}
export default FastForward;
