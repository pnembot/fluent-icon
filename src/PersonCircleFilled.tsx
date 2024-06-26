import type { SVGProps } from "react";

export function PersonCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM8 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm-.5 3h5a1.5 1.5 0 0 1 1.5 1.5c0 1.116-.459 2.01-1.212 2.615c-.741.595-1.735.885-2.788.885c-1.053 0-2.047-.29-2.788-.885C6.46 13.51 6 12.616 6 11.5A1.5 1.5 0 0 1 7.5 10Z"
      />
    </svg>
  );
}
export default PersonCircleFilled;
