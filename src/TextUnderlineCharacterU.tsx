import type { SVGProps } from "react";

export function TextUnderlineCharacterU(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 3.5a.5.5 0 0 0-1 0V10a4 4 0 0 0 8 0V3.5a.5.5 0 0 0-1 0V10a3 3 0 1 1-6 0V3.5ZM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"
      />
    </svg>
  );
}
export default TextUnderlineCharacterU;
