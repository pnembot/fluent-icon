import type { SVGProps } from "react";

export function TextBulletListTree(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm3-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm4.5 4.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-2.5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-5-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default TextBulletListTree;
