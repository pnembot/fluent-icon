import type { SVGProps } from "react";

export function TextBulletListRotate90Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM10 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM5.25 5.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75ZM10 5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 10 5Zm6.25.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75Z"
      />
    </svg>
  );
}
export default TextBulletListRotate90Filled;
