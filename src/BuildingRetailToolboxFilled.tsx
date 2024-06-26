import type { SVGProps } from "react";

export function BuildingRetailToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.915A1.5 1.5 0 0 0 16.5 3h-13A1.5 1.5 0 0 0 3 5.915V16.5a.5.5 0 0 0 .5.5H5v-4.5a.5.5 0 0 1 .5-.5h4a2.5 2.5 0 0 1 1.542-.958A2.82 2.82 0 0 1 11.05 11H5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V9h.5c.563 0 1.082.186 1.5.5V5.915ZM3.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1ZM9 13v4H6v-4h3Zm4.5-4h.5V8H6v2h5.5c.456-.607 1.182-1 2-1ZM12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"
      />
    </svg>
  );
}
export default BuildingRetailToolboxFilled;
