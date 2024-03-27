import type { SVGProps } from "react";

export function SplitVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM2 6a2 2 0 0 1 2-2h4v12H4a2 2 0 0 1-2-2V6Zm9 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v12Z"
      />
    </svg>
  );
}
export default SplitVerticalFilled;
