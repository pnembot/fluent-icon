import type { SVGProps } from "react";

export function BookInformationFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.25 6.75a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0v4Z"
      />
    </svg>
  );
}
export default BookInformationFilled;
