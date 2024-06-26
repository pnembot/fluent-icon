import type { SVGProps } from "react";

export function EditOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L7.543 8.25l-3.998 3.998a2.438 2.438 0 0 0-.655 1.194l-.878 3.95a.5.5 0 0 0 .597.597l3.926-.873a2.518 2.518 0 0 0 1.234-.678l3.981-3.98l5.396 5.396a.5.5 0 0 0 .708-.708l-15-15Zm8.189 9.604l-3.981 3.981a1.518 1.518 0 0 1-.744.409l-3.16.702l.708-3.183c.059-.267.193-.511.387-.704L8.25 8.957l2.793 2.793Zm3.999-3.999l-2.585 2.585l.707.707l3.963-3.963a2.975 2.975 0 0 0-4.207-4.207L8.957 6.836l.707.707L12.25 4.96l2.793 2.792Zm-1.415-4.17a1.975 1.975 0 0 1 2.793 2.792l-.671.671l-2.793-2.792l.671-.672Z"
      />
    </svg>
  );
}
export default EditOff;
