import type { SVGProps } from "react";

export function FilmstripPlayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm10.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Zm-.5 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5-3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5ZM4 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5 5.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5ZM4 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm4-1.374c0-.483.46-.783.828-.54l2.94 1.953c.31.206.31.716 0 .922l-2.94 1.953c-.367.243-.828-.057-.828-.54V8.126Z"
      />
    </svg>
  );
}
export default FilmstripPlayFilled;
