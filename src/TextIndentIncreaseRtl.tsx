import type { SVGProps } from "react";

export function TextIndentIncreaseRtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-3 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5ZM7.5 14a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm10.367-6.264a.5.5 0 0 0-.707 0l-1.414 1.415a.5.5 0 0 0 0 .707l1.414 1.414a.5.5 0 1 0 .707-.707l-1.06-1.06l1.06-1.062a.5.5 0 0 0 0-.707Z"
      />
    </svg>
  );
}
export default TextIndentIncreaseRtl;
