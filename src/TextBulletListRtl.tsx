import type { SVGProps } from "react";

export function TextBulletListRtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-3-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5Zm0 5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5Zm-.5 4.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11Zm2.5.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm1-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default TextBulletListRtl;
