import type { SVGProps } from "react";

export function Home(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.998 2.388a1.5 1.5 0 0 1 2.005 0l5.5 4.942A1.5 1.5 0 0 1 17 8.445V15.5a1.5 1.5 0 0 1-1.5 1.5H13a1.5 1.5 0 0 1-1.5-1.5V12a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v3.5A1.5 1.5 0 0 1 7 17H4.5A1.5 1.5 0 0 1 3 15.5V8.445c0-.425.18-.83.498-1.115l5.5-4.942Zm1.336.744a.5.5 0 0 0-.668 0l-5.5 4.942A.5.5 0 0 0 4 8.445V15.5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5V12A1.5 1.5 0 0 1 9 10.5h2a1.5 1.5 0 0 1 1.5 1.5v3.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V8.445a.5.5 0 0 0-.166-.371l-5.5-4.942Z"
      />
    </svg>
  );
}
export default Home;
