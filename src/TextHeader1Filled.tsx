import type { SVGProps } from "react";

export function TextHeader1Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.573 3.823a.75.75 0 0 0-1.058.53c-.255 1.138-1.308 2.608-2.681 3.523a.75.75 0 1 0 .832 1.248A8.769 8.769 0 0 0 15.5 7.47v8.03a.75.75 0 0 0 1.5 0V4.516a.75.75 0 0 0-.427-.693ZM3.5 4.5a.75.75 0 1 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 1 0-1.5 0V9h-5V4.5Z"
      />
    </svg>
  );
}
export default TextHeader1Filled;
