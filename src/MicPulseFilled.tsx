import type { SVGProps } from "react";

export function MicPulseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-.706A5.48 5.48 0 0 1 9 14.5A4.5 4.5 0 0 1 4.5 10ZM12 5v4.6a5.514 5.514 0 0 0-2.79 3.393A3 3 0 0 1 6 10V5a3 3 0 0 1 6 0Zm7 9.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-5.556-2a.5.5 0 0 1 .455.332l.629 1.758l.58-1.443a.5.5 0 0 1 .904-.05l.573 1.07H17a.5.5 0 1 1 0 1h-.714a.5.5 0 0 1-.441-.264l-.209-.39l-.672 1.673a.5.5 0 0 1-.935-.018l-.643-1.8l-.212.496a.5.5 0 0 1-.46.303H12a.5.5 0 0 1 0-1h.385l.584-1.364a.5.5 0 0 1 .475-.303Z"
      />
    </svg>
  );
}
export default MicPulseFilled;
