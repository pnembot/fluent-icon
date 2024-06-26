import type { SVGProps } from "react";

export function BuildingLighthouseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.248 2.066a.5.5 0 0 0-.496 0L5.571 3.884A1.133 1.133 0 0 0 6 5.992v2.194a2 2 0 0 0-1.145 1.593l-.79 7.11A1 1 0 0 0 5.059 18h7.882a1 1 0 0 0 .994-1.11l-.79-7.11A2 2 0 0 0 12 8.185V5.992a1.133 1.133 0 0 0 .43-2.108L9.247 2.066ZM11 8H7V6h4v2Zm-5.483 4.88l6.766-1.805l.212 1.909l-7.203 1.92l.225-2.024ZM16.5 7h-2a.5.5 0 1 1 0-1h2a.5.5 0 0 1 0 1Zm-.646-3.146a.5.5 0 1 0-.707-.708l-1 1a.5.5 0 0 0 .707.708l1-1Zm0 6a.5.5 0 0 0 0-.708l-1-1a.5.5 0 1 0-.707.708l1 1a.5.5 0 0 0 .707 0Z"
      />
    </svg>
  );
}
export default BuildingLighthouseFilled;
