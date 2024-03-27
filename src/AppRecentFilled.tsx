import type { SVGProps } from "react";

export function AppRecentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM2 6a2 2 0 0 1 2-2v12a2 2 0 0 1-2-2V6Zm14 10V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
      />
    </svg>
  );
}
export default AppRecentFilled;
