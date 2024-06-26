import type { SVGProps } from "react";

export function Server(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5 4.5A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 15.5v-11ZM7.5 3A1.5 1.5 0 0 0 6 4.5v11A1.5 1.5 0 0 0 7.5 17h5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 3h-5Z"
      />
    </svg>
  );
}
export default Server;
