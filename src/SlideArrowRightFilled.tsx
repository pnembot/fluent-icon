import type { SVGProps } from "react";

export function SlideArrowRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v3.757A5.477 5.477 0 0 0 14.5 9a5.48 5.48 0 0 0-2.294.5H5.5a.5.5 0 0 0 0 1h5.225c-.455.43-.837.937-1.125 1.5H5.5a.5.5 0 0 0 0 1h3.707c-.135.477-.207.98-.207 1.5s.072 1.023.207 1.5H4.5A2.5 2.5 0 0 1 2 13.5v-7Zm3.5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147.354l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default SlideArrowRightFilled;
