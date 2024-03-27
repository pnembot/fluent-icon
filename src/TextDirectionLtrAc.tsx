import type { SVGProps } from "react";

export function TextDirectionLtrAc(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M9.5 2a.5.5 0 0 1 .5.5V6h1.5a.5.5 0 0 1 0 1H10v3.5a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5zM3 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1.25c0 1.052-.208 2.347-.879 3.395C6.431 9.224 5.272 10 3.5 10a.5.5 0 0 1 0-1c1.428 0 2.27-.599 2.779-1.395C6.809 6.778 7 5.698 7 4.75V4H3.5a.5.5 0 0 1-.5-.5zm11.146.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L15.293 7H13.5a.5.5 0 0 1 0-1h1.793l-1.147-1.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L15.293 15H3.5a.5.5 0 0 1 0-1h11.793l-1.147-1.146a.5.5 0 0 1 0-.708z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextDirectionLtrAc;
