import type { SVGProps } from "react";

export function ProjectionScreenDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 4.793l-1.146-1.147a.5.5 0 0 0-.708.708L13.793 5.5l-1.147 1.146a.5.5 0 0 0 .708.708L14.5 6.207l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 5.5l1.147-1.146ZM16 11v-.207c.349-.099.683-.23 1-.393v.6a3 3 0 0 1-3 3h-3.5v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 0 1 0-2h6.6a5.465 5.465 0 0 0-.578 2H4v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z"
      />
    </svg>
  );
}
export default ProjectionScreenDismiss;
