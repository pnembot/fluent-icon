import type { SVGProps } from "react";

export function BuildingSkyscraperFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2.496a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V3H7v-.504ZM5.458 4A.5.5 0 0 0 5 4.5V5h6v-.5a.5.5 0 0 0-.458-.5H5.458Zm8.292 11a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75-3.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM5 6h6v.018a2 2 0 0 1 1 1.732V8h.5a4.5 4.5 0 0 1 4.5 4.5v4a.5.5 0 0 1-.5.5h-5a.52.52 0 0 1-.042-.001H9V14.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.498H4.5a.5.5 0 0 1-.5-.5V7.75a2 2 0 0 1 1-1.732V6Zm7 10h4v-3.5A3.5 3.5 0 0 0 12.5 9H12v7ZM7.5 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM7.5 11.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default BuildingSkyscraperFilled;
