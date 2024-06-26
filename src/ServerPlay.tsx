import type { SVGProps } from "react";

export function ServerPlay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 9.022V4.5A1.5 1.5 0 0 0 12.5 3h-5A1.5 1.5 0 0 0 6 4.5v11A1.5 1.5 0 0 0 7.5 17h2.1c.183.358.404.693.657 1H7.5A2.5 2.5 0 0 1 5 15.5v-11A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5v4.522a5.571 5.571 0 0 0-1 0ZM7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 12.5a.5.5 0 0 1 .5-.5h2.1a5.465 5.465 0 0 0-.393 1H7.5a.5.5 0 0 1-.5-.5Zm2 2c0-.168.008-.335.022-.5H7.5a.5.5 0 0 0 0 1h1.522A5.571 5.571 0 0 1 9 14.5Zm10 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874Z"
      />
    </svg>
  );
}
export default ServerPlay;
