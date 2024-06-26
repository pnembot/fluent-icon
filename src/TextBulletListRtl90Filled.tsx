import type { SVGProps } from "react";

export function TextBulletListRtl90Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 16.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0ZM4.75 13a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-.75.75ZM9 12.25a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-1.5 0v9.5Zm5 0a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-1.5 0v9.5ZM9.75 15.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5ZM16 16.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0Z"
      />
    </svg>
  );
}
export default TextBulletListRtl90Filled;
