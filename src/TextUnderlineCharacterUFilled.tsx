import type { SVGProps } from "react";

export function TextUnderlineCharacterUFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 3.75a.75.75 0 0 0-1.5 0V9.5a4.5 4.5 0 1 0 9 0V3.75a.75.75 0 0 0-1.5 0V9.5a3 3 0 1 1-6 0V3.75ZM5.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
      />
    </svg>
  );
}
export default TextUnderlineCharacterUFilled;
