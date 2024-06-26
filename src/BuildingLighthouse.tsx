import type { SVGProps } from "react";

export function BuildingLighthouse(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.752 2.066a.5.5 0 0 1 .496 0l3.181 1.818A1.133 1.133 0 0 1 12 5.992v2.194a2 2 0 0 1 1.145 1.593l.79 7.11A1 1 0 0 1 12.941 18H5.06a1 1 0 0 1-.994-1.11l.79-7.11A2 2 0 0 1 6 8.185V5.992a1.133 1.133 0 0 1-.43-2.108l3.182-1.818ZM9 3.076L6.067 4.752A.133.133 0 0 0 6.133 5h5.734a.133.133 0 0 0 .066-.248L9 3.076ZM11.165 9h-4.33a1 1 0 0 0-.986.89l-.214 1.923l6.537-1.743l-.02-.18a1 1 0 0 0-.987-.89ZM11 8V6H7v2h4Zm-5.708 6.905l7.203-1.921l-.212-1.909l-6.766 1.805l-.225 2.025Zm-.119 1.066L5.059 17h7.882l-.334-3.011l-7.434 1.982ZM14.5 7h2a.5.5 0 0 0 0-1h-2a.5.5 0 1 0 0 1Zm1.354-3.854a.5.5 0 0 1 0 .708l-1 1a.5.5 0 1 1-.707-.708l1-1a.5.5 0 0 1 .707 0Zm0 6a.5.5 0 1 1-.707.708l-1-1a.5.5 0 0 1 .707-.708l1 1Z"
      />
    </svg>
  );
}
export default BuildingLighthouse;
