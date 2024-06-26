import type { SVGProps } from "react";

export function ShareAndroidFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5a2.5 2.5 0 0 1-4.467 1.543L7.915 9.352a2.503 2.503 0 0 1 0 1.297l4.618 2.308a2.5 2.5 0 1 1-.448.894l-4.618-2.308a2.5 2.5 0 1 1 0-3.085l4.618-2.31A2.504 2.504 0 0 1 14.5 3A2.5 2.5 0 0 1 17 5.5Z"
      />
    </svg>
  );
}
export default ShareAndroidFilled;
