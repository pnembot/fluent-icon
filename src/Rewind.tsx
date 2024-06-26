import type { SVGProps } from "react";

export function Rewind(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.487a1 1 0 0 0-1.591-.806l-5.88 4.311a1.25 1.25 0 0 0 0 2.016l5.88 4.312A1 1 0 0 0 10 14.514v-3.16l5.409 3.966A1 1 0 0 0 17 14.514V5.487a1 1 0 0 0-1.591-.806L10 8.647v-3.16ZM3.12 9.8L9 5.487v9.027l-5.88-4.312a.25.25 0 0 1 0-.403Zm7 0L16 5.487v9.027l-5.88-4.312a.25.25 0 0 1 0-.403Z"
      />
    </svg>
  );
}
export default Rewind;
