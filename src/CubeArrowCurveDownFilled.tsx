import type { SVGProps } from "react";

export function CubeArrowCurveDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1.004 5.495A4.498 4.498 0 0 1 5.504 1c2.485 0 4.5 2.013 4.5 4.495a4.498 4.498 0 0 1-4.5 4.495a4.498 4.498 0 0 1-4.5-4.495Zm6.396.896l-.896.895V5.745a2.749 2.749 0 0 0-2.75-2.747h-.25a.5.5 0 1 0 0 .999h.25c.966 0 1.75.782 1.75 1.748v1.541l-.897-.895a.5.5 0 0 0-.707.706l1.752 1.75a.498.498 0 0 0 .705-.002l1.75-1.748A.5.5 0 1 0 7.4 6.39Zm3.601-.896c0 .787-.166 1.535-.464 2.211l3.76-1.669a.5.5 0 0 1 .407.913L10.5 8.816v4.67a.5.5 0 0 1-1 0v-4.22a5.488 5.488 0 0 1-4 1.723c-1.33 0-2.55-.471-3.5-1.256v4.075c0 .613.373 1.164.943 1.392L8.7 17.5a3.503 3.503 0 0 0 2.6 0l5.757-2.3c.57-.228.943-.779.943-1.392V6.171c0-.613-.373-1.164-.943-1.391L11.3 2.48a3.502 3.502 0 0 0-1.376-.25A5.466 5.466 0 0 1 11 5.495Z"
      />
    </svg>
  );
}
export default CubeArrowCurveDownFilled;
