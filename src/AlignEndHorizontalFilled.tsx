import type { SVGProps } from "react";

export function AlignEndHorizontalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15ZM10 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2Z"
      />
    </svg>
  );
}
export default AlignEndHorizontalFilled;
