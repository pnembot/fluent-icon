import type { SVGProps } from "react";

export function LocationArrowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.637 2.07c.81-.312 1.604.483 1.293 1.292l-5.384 13.997c-.348.906-1.653.834-1.9-.105l-1.572-5.973a.5.5 0 0 0-.356-.356L2.745 9.353c-.94-.247-1.01-1.552-.105-1.9l13.997-5.384Z"
      />
    </svg>
  );
}
export default LocationArrowFilled;
