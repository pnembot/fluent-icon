import type { SVGProps } from "react";

export function SaveSync(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5a2 2 0 0 1 2-2h8.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 17 6.621V9.6a5.465 5.465 0 0 0-1-.393V6.621a1 1 0 0 0-.293-.707l-1.621-1.621A1 1 0 0 0 13.379 4H13v2.5A1.5 1.5 0 0 1 11.5 8h-4A1.5 1.5 0 0 1 6 6.5V4H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1v-4.5A1.5 1.5 0 0 1 6.5 10h4.837c-.403.284-.767.62-1.08 1H6.5a.5.5 0 0 0-.5.5V16h3.207c.099.349.23.683.393 1H5a2 2 0 0 1-2-2V5Zm4-1v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V4H7Zm3 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a1.999 1.999 0 0 0-2.383.336a.5.5 0 0 1-.706-.707A3.001 3.001 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a1.999 1.999 0 0 0 2.383-.336a.5.5 0 0 1 .706.707c-.284.285-.624.51-.997.66Z"
      />
    </svg>
  );
}
export default SaveSync;
