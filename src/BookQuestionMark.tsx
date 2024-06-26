import type { SVGProps } from "react";

export function BookQuestionMark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8ZM8.76 6.409C8.95 6.21 9.31 6 10 6s1.05.211 1.24.409c.2.21.26.456.26.591c0 .454-.27.698-.723.924a6.995 6.995 0 0 1-.343.156l-.022.01a5.258 5.258 0 0 0-.324.147a1.455 1.455 0 0 0-.345.228A.731.731 0 0 0 9.5 9v1a.5.5 0 1 0 1 0v-.85l.037-.02c.075-.038.166-.077.283-.127l.011-.005c.117-.051.253-.11.392-.18C11.77 8.548 12.5 8.047 12.5 7c0-.365-.14-.869-.54-1.284C11.55 5.29 10.91 5 10 5c-.91 0-1.55.289-1.96.716c-.4.415-.54.919-.54 1.284a.5.5 0 0 0 1 0c0-.135.06-.381.26-.591ZM10 13a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default BookQuestionMark;
