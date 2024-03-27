import type { SVGProps } from "react";

export function BookQuestionMarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm2.76 4.409A.907.907 0 0 0 8.5 7a.5.5 0 0 1-1 0c0-.365.14-.869.54-1.284C8.45 5.29 9.09 5 10 5c.91 0 1.55.289 1.96.716c.4.415.54.919.54 1.284c0 1.046-.73 1.547-1.277 1.819a7.991 7.991 0 0 1-.392.179l-.011.005a5.748 5.748 0 0 0-.32.146V10a.5.5 0 0 1-1 .001V9c0-.248.128-.426.243-.535c.109-.102.24-.175.345-.228c.102-.052.218-.102.324-.147l.022-.01c.118-.051.232-.1.343-.156c.453-.226.723-.47.723-.924a.907.907 0 0 0-.26-.591C11.05 6.21 10.69 6 10 6s-1.05.211-1.24.409ZM10 13a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}
export default BookQuestionMarkFilled;
