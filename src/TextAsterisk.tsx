import type { SVGProps } from "react";

export function TextAsterisk(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2.5a.5.5 0 0 0-1 0v6.293l-4.45-4.45a.5.5 0 1 0-.707.707l4.45 4.45H2.5a.5.5 0 0 0 0 1h6.293l-4.45 4.45a.5.5 0 1 0 .707.707l4.45-4.45V17.5a.5.5 0 0 0 1 0v-6.293l4.45 4.45a.5.5 0 1 0 .707-.707l-4.45-4.45H17.5a.5.5 0 0 0 0-1h-6.293l4.45-4.45a.5.5 0 1 0-.707-.707l-4.45 4.45V2.5Z"
      />
    </svg>
  );
}
export default TextAsterisk;
