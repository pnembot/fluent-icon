import type { SVGProps } from "react";

export function ServerMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 12.5 2h-5Zm0 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM7 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM2 7a2 2 0 0 1 2-2v10.5c0 .17.012.337.035.5H4a2 2 0 0 1-2-2V7Zm14 8.5c0 .17-.012.337-.035.5H16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2v10.5Z"
      />
    </svg>
  );
}
export default ServerMultipleFilled;
