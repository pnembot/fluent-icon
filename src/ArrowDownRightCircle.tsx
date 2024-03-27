import type { SVGProps } from "react";

export function ArrowDownRightCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm1.41 3.007L9.5 6a.5.5 0 0 1 .493.41L10 6.5v3.025l-.012.085l-.019.064l-.035.076l-.051.073l-.046.048l-.067.051l-.06.033l-.038.016l-.064.02l-.086.01H6.501a.5.5 0 0 1-.09-.991L6.5 9L8.294 9L6.147 6.853a.5.5 0 0 1-.058-.638l.058-.07a.5.5 0 0 1 .638-.057l.07.058L9 8.292V6.499a.5.5 0 0 1 .41-.492L9.5 6l-.09.008z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default ArrowDownRightCircle;
