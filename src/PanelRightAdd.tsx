import type { SVGProps } from "react";

export function PanelRightAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 6c0-1.104-.896-2.019-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.207a5.479 5.479 0 0 1-.185-1H4.001a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8.004v4.597a5.46 5.46 0 0 1 1-.392V5H16a1 1 0 0 1 1 1v3.6a5.5 5.5 0 0 1 1.001.657V6Zm-3.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default PanelRightAdd;
