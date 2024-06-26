import type { SVGProps } from "react";

export function DocumentLandscapeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 10h-4.5A1.5 1.5 0 0 1 12 8.5V4H3.5A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h13a1.5 1.5 0 0 0 1.5-1.5V10Zm-.25-1H13.5a.5.5 0 0 1-.5-.5V4.25L17.75 9Z"
      />
    </svg>
  );
}
export default DocumentLandscapeFilled;
