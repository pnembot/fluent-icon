import type { SVGProps } from "react";

export function SlashForward(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.658 2.026a.5.5 0 0 1 .317.632l-5 15a.5.5 0 1 1-.95-.316l5-15a.5.5 0 0 1 .633-.316Z"
      />
    </svg>
  );
}
export default SlashForward;
