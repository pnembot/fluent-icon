import type { SVGProps } from "react";

export function TextFontSize(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 3.5a.5.5 0 0 1 .468.324l2.996 7.99a.515.515 0 0 1 .008.021l1.496 3.99a.5.5 0 1 1-.936.35L15.654 12.5h-5.307l-1.379 3.676a.5.5 0 0 1-.932.01L6.962 13.5H4.039l-1.075 2.686a.5.5 0 1 1-.928-.372l1.196-2.989a.485.485 0 0 1 .008-.021l1.796-4.49a.5.5 0 0 1 .928 0l1.796 4.49a.485.485 0 0 1 .009.021l.716 1.791l1.043-2.78a.525.525 0 0 1 .008-.022l2.996-7.99A.5.5 0 0 1 13 3.5Zm-2.278 8h4.557L13 5.424L10.722 11.5Zm-4.16 1L5.5 9.846L4.44 12.5h2.123Z"
      />
    </svg>
  );
}
export default TextFontSize;
