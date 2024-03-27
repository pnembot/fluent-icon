import type { SVGProps } from "react";

export function Clover(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 2a3.5 3.5 0 1 0 0 7h3a.5.5 0 0 0 .5-.5v-3A3.5 3.5 0 0 0 5.5 2ZM3 5.5a2.5 2.5 0 0 1 5 0V8H5.5A2.5 2.5 0 0 1 3 5.5ZM5.5 17a3.5 3.5 0 1 1 0-7h3a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 5.5 17ZM3 13.5a2.5 2.5 0 0 0 5 0V11H5.5A2.5 2.5 0 0 0 3 13.5Zm14-8a3.5 3.5 0 1 0-7 0v3a.5.5 0 0 0 .5.5h3A3.5 3.5 0 0 0 17 5.5ZM13.5 3a2.5 2.5 0 0 1 0 5H11V5.5A2.5 2.5 0 0 1 13.5 3Zm0 14a3.5 3.5 0 1 0 0-7h-3a.5.5 0 0 0-.5.5v3a3.5 3.5 0 0 0 3.5 3.5Zm2.5-3.5a2.5 2.5 0 0 1-5 0V11h2.5a2.5 2.5 0 0 1 2.5 2.5Z"
      />
    </svg>
  );
}
export default Clover;
