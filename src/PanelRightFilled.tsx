import type { SVGProps } from "react";

export function PanelRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 3a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10ZM5 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h6.5V4H5Z"
      />
    </svg>
  );
}
export default PanelRightFilled;
