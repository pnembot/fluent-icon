import type { SVGProps } from "react";

export function SlideTextMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 15a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13.5 3h-9A2.5 2.5 0 0 0 2 5.5v7A2.502 2.502 0 0 0 4.484 15H13.5Zm-8-9h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm0 2.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm-.5 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM6.5 17a2.496 2.496 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-7Z"
      />
    </svg>
  );
}
export default SlideTextMultipleFilled;
