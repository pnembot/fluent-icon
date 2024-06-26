import type { SVGProps } from "react";

export function HandRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 8.5V2.75a.75.75 0 0 1 1.5 0V8.5a.5.5 0 0 0 1 0V3.75a.75.75 0 0 1 1.5 0v6.5c.662-.426 1.392-.75 2-.75c.971 0 1.787.324 1.984 1.116a.605.605 0 0 1 .016.145c0 .15-.07.292-.191.382l-1.313.985c-1.062.796-2.063 1.865-2.76 2.988a31.683 31.683 0 0 0-1.054 1.868C11.322 17.661 11.094 18 10 18H6.955C6 18 5.637 17.467 5 16s-1-2.944-1-3.5V5.25a.75.75 0 0 1 1.5 0V9a.5.5 0 0 0 1 0V3.75a.75.75 0 0 1 1.5 0V8.5a.5.5 0 0 0 1 0Z"
      />
    </svg>
  );
}
export default HandRightFilled;
