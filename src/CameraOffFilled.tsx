import type { SVGProps } from "react";

export function CameraOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.502 4.209L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-.95-.95c-.22.062-.452.096-.691.096h-11a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 1.497-2.291Zm8.95 8.95l-.714-.714a3 3 0 0 1-4.184-4.184l-.714-.714a4 4 0 0 0 5.613 5.613Zm-3.23-6.057l3.676 3.675a3.003 3.003 0 0 0-3.675-3.675ZM14 10c0 .554-.113 1.082-.317 1.562l4.058 4.057a2.49 2.49 0 0 0 .264-1.119v-8a2.5 2.5 0 0 0-2.5-2.5h-1.69l-.585-1.17A1.5 1.5 0 0 0 11.888 2H8.124a1.5 1.5 0 0 0-1.34.826L6.194 4h-.073l2.317 2.318A4 4 0 0 1 14 10Z"
      />
    </svg>
  );
}
export default CameraOffFilled;
