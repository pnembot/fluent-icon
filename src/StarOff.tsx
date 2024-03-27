import type { SVGProps } from "react";

export function StarOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.856 2.146a.5.5 0 1 0-.708.708l4.093 4.092l-3.384.492a1 1 0 0 0-.554 1.705l3.124 3.045l-.738 4.3A1 1 0 0 0 6.14 17.54l3.861-2.03l3.86 2.03a1 1 0 0 0 1.452-1.054l-.097-.566l1.932 1.933a.5.5 0 0 0 .707-.708l-15-15Zm11.135 12.55l.336 1.96l-3.86-2.03a1 1 0 0 0-.931 0l-3.861 2.03l.737-4.299a1 1 0 0 0-.287-.885L3 8.427l4.122-.599l6.868 6.868Zm-.114-3.224a1.001 1.001 0 0 0-.128.154l.881.88l-.055-.318L17.7 9.143a1 1 0 0 0-.554-1.705l-4.317-.628l-1.93-3.911a1 1 0 0 0-1.794 0l-1.35 2.733l.747.747l1.5-3.037l1.93 3.911a1 1 0 0 0 .752.547l4.317.627l-3.124 3.045Z"
      />
    </svg>
  );
}
export default StarOff;
