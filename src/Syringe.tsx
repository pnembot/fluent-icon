import type { SVGProps } from "react";

export function Syringe(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.146 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-.396-.397l-1.793 1.793l1.897 1.896a.5.5 0 0 1-.708.708L15 8.707l-5.56 5.56A2.5 2.5 0 0 1 7.671 15H5.707l-2.853 2.854a.5.5 0 0 1-.708-.708L5 14.293v-1.965a2.5 2.5 0 0 1 .732-1.767L11.292 5l-1.146-1.146a.5.5 0 0 1 .708-.708l1.896 1.897l1.793-1.793l-.397-.396a.5.5 0 0 1 0-.708ZM10 7.707l-.793.793l.647.646a.5.5 0 0 1-.708.708L8.5 9.207L7.707 10l.647.646a.5.5 0 0 1-.708.708L7 10.707l-.56.56A1.5 1.5 0 0 0 6 12.329V14h1.672a1.5 1.5 0 0 0 1.06-.44L14.292 8L12 5.707L10.707 7l.647.646a.5.5 0 0 1-.708.708L10 7.707Zm6.043-2.957l-.793-.793l-1.793 1.793l.793.793l1.793-1.793Z"
      />
    </svg>
  );
}
export default Syringe;
