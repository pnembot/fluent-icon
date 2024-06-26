import type { SVGProps } from "react";

export function HomeDatabase(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.998 2.388a1.5 1.5 0 0 1 2.005 0l5.348 4.806A8.707 8.707 0 0 0 14.641 7l-4.307-3.869a.5.5 0 0 0-.668 0l-5.5 4.942A.5.5 0 0 0 4 8.445V15.5a.5.5 0 0 0 .5.5H9v.5c0 .173.018.34.05.5H4.5A1.5 1.5 0 0 1 3 15.5V8.445c0-.425.18-.83.498-1.115l5.5-4.942Zm6.881 5.732a6.47 6.47 0 0 1 1.12.3C18.207 8.87 19 9.634 19 10.5c0 1.38-2.015 2.5-4.5 2.5S10 11.88 10 10.5S12.015 8 14.5 8c.481 0 .945.042 1.38.12ZM14.5 14c1.38 0 2.678-.309 3.668-.858c.293-.163.578-.36.833-.59L19 16.5c0 1.381-2.015 2.5-4.5 2.5S10 17.88 10 16.5v-3.945c.255.23.54.425.832.588c.99.55 2.288.858 3.668.858Z"
      />
    </svg>
  );
}
export default HomeDatabase;
