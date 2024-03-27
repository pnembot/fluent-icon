import type { SVGProps } from "react";

export function StarArrowRightStartFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.103 2.557a1 1 0 0 1 1.794 0l1.93 3.911l4.316.627a1 1 0 0 1 .554 1.706l-3.123 3.044l.737 4.299a1 1 0 0 1-1.45 1.054l-2.978-1.565a5.5 5.5 0 0 0-7.802-6.074l-.778-.758a1 1 0 0 1 .554-1.706l4.316-.627l1.93-3.91ZM5.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003A.498.498 0 0 0 8 14.503v-.006a.498.498 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L6.293 14H3.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default StarArrowRightStartFilled;
