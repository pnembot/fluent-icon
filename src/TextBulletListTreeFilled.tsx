import type { SVGProps } from "react";

export function TextBulletListTreeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.25 6a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM7 4.75A.75.75 0 0 1 7.75 4h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75ZM7.75 9a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Zm4 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM4.5 9.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM7.25 16a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default TextBulletListTreeFilled;
