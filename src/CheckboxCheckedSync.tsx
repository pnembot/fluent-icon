import type { SVGProps } from "react";

export function CheckboxCheckedSync(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.207a5.48 5.48 0 0 1-.185-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.022a5.5 5.5 0 0 1 1 .185V5a3 3 0 0 0-3-3H5Zm7.854 4.854a.5.5 0 0 0-.708-.708L7.5 10.793L5.854 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5ZM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a1.999 1.999 0 0 0-2.383.336a.5.5 0 0 1-.706-.707A3.001 3.001 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a1.999 1.999 0 0 0 2.383-.336a.5.5 0 0 1 .706.707c-.284.285-.624.51-.997.66Z"
      />
    </svg>
  );
}
export default CheckboxCheckedSync;
