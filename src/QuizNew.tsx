import type { SVGProps } from "react";

export function QuizNew(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.465 5.465 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5v-9A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5v3.707c.349.099.683.23 1 .393V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm3.707 10c.099-.349.23-.683.393-1H5.5a.5.5 0 0 0 0 1h3.707ZM8.5 15a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3ZM8 5a.5.5 0 0 1 .457.297l2 4.5a.5.5 0 1 1-.914.406L9.008 9H6.992l-.535 1.203a.5.5 0 0 1-.914-.406l2-4.5A.5.5 0 0 1 8 5Zm.564 3L8 6.731L7.436 8h1.128ZM13.5 5.5a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1Zm5.5 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default QuizNew;
