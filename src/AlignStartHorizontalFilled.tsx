import type { SVGProps } from "react";

export function AlignStartHorizontalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15ZM8 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8Z"
      />
    </svg>
  );
}
export default AlignStartHorizontalFilled;
