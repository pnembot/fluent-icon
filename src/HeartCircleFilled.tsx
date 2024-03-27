import type { SVGProps } from "react";

export function HeartCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0Zm7.6-2.385L9.99 8l.4-.393a2.12 2.12 0 0 1 3.035 2.958l-3.06 3.274a.5.5 0 0 1-.73 0L6.57 10.561A2.113 2.113 0 0 1 9.6 7.615Z"
      />
    </svg>
  );
}
export default HeartCircleFilled;
