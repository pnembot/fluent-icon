import type { SVGProps } from "react";

export function HandRightOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5.25c0-.154.047-.297.126-.417l-1.98-1.98a.5.5 0 1 1 .708-.707l15 15a.5.5 0 0 1-.708.708l-3.716-3.717a9.936 9.936 0 0 0-.694.98a31.683 31.683 0 0 0-1.054 1.867C11.322 17.661 11.094 18 10 18H6.955C6 18 5.637 17.467 5 16s-1-2.944-1-3.5V5.25Zm2.5 1.957l-1-1V9a.5.5 0 0 0 1 0V7.207ZM8 3.75v2.129l-1.5-1.5V3.75a.75.75 0 0 1 1.5 0Zm3.11 5.238l3.7 3.7c.224-.198.454-.386.686-.56l1.313-.985a.478.478 0 0 0 .191-.382a.605.605 0 0 0-.016-.145C16.787 9.824 15.971 9.5 15 9.5c-.608 0-1.338.324-2 .75v-6.5a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-.39.488ZM9 6.878l1.5 1.5V2.75a.75.75 0 0 0-1.5 0v4.129Z"
      />
    </svg>
  );
}
export default HandRightOffFilled;
