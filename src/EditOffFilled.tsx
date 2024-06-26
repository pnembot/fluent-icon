import type { SVGProps } from "react";

export function EditOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L7.543 8.25l-3.998 3.998a2.438 2.438 0 0 0-.655 1.194l-.878 3.95a.5.5 0 0 0 .597.597l3.926-.873a2.518 2.518 0 0 0 1.234-.678l3.981-3.98l5.396 5.396a.5.5 0 0 0 .708-.708l-15-15Zm12.897 6.31l-2.587 2.587l-4.207-4.207l2.587-2.587l4.207 4.207Zm-2.83-5.583a2.975 2.975 0 0 1 4.206 4.207l-.669.669l-4.207-4.207l.67-.669Z"
      />
    </svg>
  );
}
export default EditOffFilled;
