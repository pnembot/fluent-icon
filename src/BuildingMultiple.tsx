import type { SVGProps } from "react";

export function BuildingMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm10 13h2v-2h-2v2Zm3 0h2V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10h2v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2ZM11 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13h5V7a2 2 0 0 1 2-2h1V4Zm1 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM6 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm5.25 6.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM6 14.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75-2.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM15.5 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default BuildingMultiple;
