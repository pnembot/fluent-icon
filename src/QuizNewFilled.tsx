import type { SVGProps } from "react";

export function QuizNewFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.47 5.47 0 0 1-.6-2.5a5.5 5.5 0 0 1 .207-1.5H5.5a.5.5 0 0 1 0-1h4.1A5.5 5.5 0 0 1 17 9.6V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm0 11h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1ZM8 5a.5.5 0 0 1 .457.297l2 4.5a.5.5 0 1 1-.914.406L9.008 9H6.992l-.535 1.203a.5.5 0 0 1-.914-.406l2-4.5A.5.5 0 0 1 8 5Zm.564 3L8 6.731L7.436 8h1.128ZM13.5 5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm5.5 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default QuizNewFilled;
