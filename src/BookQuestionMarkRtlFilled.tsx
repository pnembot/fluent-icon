import type { SVGProps } from "react";

export function BookQuestionMarkRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.24 4.409C11.05 6.21 10.69 6 10 6s-1.05.211-1.24.409A.907.907 0 0 0 8.5 7c0 .454.27.698.723.924c.111.055.225.105.343.156l.022.01c.106.045.222.095.324.147c.105.053.236.126.345.228A.731.731 0 0 1 10.5 9v1a.5.5 0 1 1-1 0v-.85a5.749 5.749 0 0 0-.32-.147l-.011-.005a7.97 7.97 0 0 1-.392-.18C8.23 8.548 7.5 8.047 7.5 7c0-.365.14-.869.54-1.284C8.45 5.29 9.09 5 10 5c.91 0 1.55.289 1.96.716c.4.415.54.919.54 1.284a.5.5 0 0 1-1 0a.907.907 0 0 0-.26-.591ZM10 13a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}
export default BookQuestionMarkRtlFilled;
