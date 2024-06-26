import type { SVGProps } from "react";

export function LineHorizontal4Search(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 10a4.481 4.481 0 0 0 2.809-.984l3.837 3.838a.5.5 0 0 0 .708-.708L16.016 8.31A4.5 4.5 0 1 0 12.5 10Zm0-8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7Zm.02 9h3.359l1 1H2.5a.5.5 0 0 1 0-1h10.02ZM2.5 3h5.1a5.463 5.463 0 0 0-.393 1H2.5a.5.5 0 0 1 0-1Zm5.1 5a5.463 5.463 0 0 1-.393-1H2.5a.5.5 0 0 0 0 1h5.1ZM2 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default LineHorizontal4Search;
