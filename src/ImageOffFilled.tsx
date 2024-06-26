import type { SVGProps } from "react";

export function ImageOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.409 1.408A2.98 2.98 0 0 0 3 6v8c0 .65.206 1.25.557 1.742l5.39-5.308c.14-.136.298-.24.468-.312l.632.633l-.352.352a.51.51 0 0 0-.046.04l-5.384 5.301C4.755 16.796 5.354 17 6 17h8c.597 0 1.154-.174 1.622-.475l.01-.008a2.31 2.31 0 0 0 .103-.069l-.003-.003l.003-.003l1.411 1.412a.5.5 0 0 0 .708-.708l-15-15ZM13 7.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM5.223 3.102l11.675 11.675c.067-.248.102-.508.102-.777V6a3 3 0 0 0-3-3H6c-.269 0-.53.035-.777.102ZM14 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}
export default ImageOffFilled;
