import type { SVGProps } from "react";

export function DeleteOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.293 4L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.998-2A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1h.793Zm10.993 10.993L12 12.707V14a.5.5 0 0 1-1 0v-2.293l-2-2V14a.5.5 0 0 1-1 0V8.707L4.596 5.303l1.145 9.926A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77l.027-.237ZM11 8.88l1 1V8a.5.5 0 0 0-1 0v.879ZM15.439 5l-.86 7.457l.902.903l.965-8.36H17.5a.5.5 0 0 0 0-1h-5a2.5 2.5 0 0 0-5 0H6.121l1 1h8.318ZM11.5 4h-3a1.5 1.5 0 1 1 3 0Z"
      />
    </svg>
  );
}
export default DeleteOff;
