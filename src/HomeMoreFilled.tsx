import type { SVGProps } from "react";

export function HomeMoreFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.002 2.384a1.5 1.5 0 0 0-2.005 0l-5.5 4.943A1.5 1.5 0 0 0 3 8.443V15.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V8.443a1.5 1.5 0 0 0-.497-1.116l-5.5-4.943ZM7 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-5 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default HomeMoreFilled;
