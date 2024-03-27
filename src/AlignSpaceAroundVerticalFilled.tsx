import type { SVGProps } from "react";

export function AlignSpaceAroundVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 16A1.5 1.5 0 0 0 9 14.5v-9A1.5 1.5 0 0 0 7.5 4h-2A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h2Zm7 0a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-2A1.5 1.5 0 0 0 11 5.5v9a1.5 1.5 0 0 0 1.5 1.5h2Z"
      />
    </svg>
  );
}
export default AlignSpaceAroundVerticalFilled;
