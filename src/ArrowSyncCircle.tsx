import type { SVGProps } from "react";

export function ArrowSyncCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 1 1 0 14a7 7 0 0 1 0-14Zm8 7a8 8 0 1 0-16 0a8 8 0 0 0 16 0Zm-8-2.5A2.5 2.5 0 0 1 12.292 9H11.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 0 0 .746.667A2.493 2.493 0 0 1 10 7.5Zm-3 4.304v.696a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.792a2.5 2.5 0 0 0 4.156.666a.5.5 0 0 1 .745.668A3.498 3.498 0 0 1 7 11.804Z"
      />
    </svg>
  );
}
export default ArrowSyncCircle;
