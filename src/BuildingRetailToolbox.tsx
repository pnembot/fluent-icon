import type { SVGProps } from "react";

export function BuildingRetailToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 .5 2.915V9.5a2.489 2.489 0 0 0-1-.45V6H4v10h1v-3.5a.5.5 0 0 1 .5-.5h4c-.314.418-.5.937-.5 1.5V13H6v3h3v1H3.5a.5.5 0 0 1-.5-.5V5.915A1.5 1.5 0 0 1 2 4.5ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM15 7.5V9h-1V8H6v2h5.5a2.49 2.49 0 0 0-.45 1H5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5ZM12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"
      />
    </svg>
  );
}
export default BuildingRetailToolbox;
