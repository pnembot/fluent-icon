import type { SVGProps } from "react";

export function Space3d(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm13 0a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h12V6ZM4 11.992L5.138 10H4v1.992Zm.862.508h2.76l.715-2.5H6.29l-1.428 2.5ZM4 13.5v.5a2 2 0 0 0 2 2h.623l.714-2.5H4Zm4.377 0L7.663 16h4.674l-.714-2.5H8.377Zm4.286 0l.714 2.5H14a2 2 0 0 0 2-2v-.5h-3.337Zm2.475-1L13.71 10h-2.047l.714 2.5h2.761Zm-3.8 0l-.715-2.5H9.377l-.714 2.5h2.674ZM16 11.992V10h-1.138L16 11.992Z"
      />
    </svg>
  );
}
export default Space3d;
