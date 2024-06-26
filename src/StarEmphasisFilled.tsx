import type { SVGProps } from "react";

export function StarEmphasisFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-3.124 3.044l.738 4.3a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627l1.93-3.912ZM4.39 12.687a.5.5 0 0 1-.078.703l-2.5 2a.5.5 0 1 1-.624-.781l2.5-2a.5.5 0 0 1 .702.078ZM4.312 5.11a.5.5 0 1 1-.624.78l-2.5-2a.5.5 0 1 1 .624-.78l2.5 2Zm11.297 7.578a.5.5 0 0 0 .079.703l2.5 2a.5.5 0 1 0 .624-.781l-2.5-2a.5.5 0 0 0-.703.078Zm.079-7.578a.5.5 0 0 0 .624.78l2.5-2a.5.5 0 1 0-.624-.78l-2.5 2Z"
      />
    </svg>
  );
}
export default StarEmphasisFilled;
