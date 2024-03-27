import type { SVGProps } from "react";

export function BookQuestionMarkRtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-2.76 3.409c.2.21.26.456.26.591a.5.5 0 0 0 1 0c0-.365-.14-.869-.54-1.284C11.55 5.29 10.91 5 10 5c-.91 0-1.55.289-1.96.716c-.4.415-.54.919-.54 1.284c0 1.046.73 1.547 1.277 1.819c.139.069.275.128.392.179l.011.005a5.749 5.749 0 0 1 .32.146V10a.5.5 0 0 0 1 .001V9a.731.731 0 0 0-.243-.535a1.455 1.455 0 0 0-.345-.228a5.258 5.258 0 0 0-.324-.147l-.022-.01c-.118-.051-.232-.1-.343-.156C8.77 7.698 8.5 7.454 8.5 7c0-.135.06-.381.26-.591C8.95 6.21 9.31 6 10 6s1.05.211 1.24.409ZM10 13a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}
export default BookQuestionMarkRtl;
