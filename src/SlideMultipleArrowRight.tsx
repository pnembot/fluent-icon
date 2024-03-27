import type { SVGProps } from "react";

export function SlideMultipleArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2v-1a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h7a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H6Zm1 3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2.6a5.465 5.465 0 0 1-.393-1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1.6c.358.183.693.404 1 .657V8a2 2 0 0 0-2-2H7Zm7.5 4a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default SlideMultipleArrowRight;
