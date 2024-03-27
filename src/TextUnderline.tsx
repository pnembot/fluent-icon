import type { SVGProps } from "react";

export function TextUnderline(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3.5a.5.5 0 0 0-1 0v6.455C5 12.736 7.234 15 10 15s5-2.264 5-5.045V3.5a.5.5 0 0 0-1 0v6.455C14 12.194 12.204 14 10 14c-2.204 0-4-1.806-4-4.045V3.5Zm-1 13a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default TextUnderline;
