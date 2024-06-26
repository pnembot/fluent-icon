import type { SVGProps } from "react";

export function PersonMoneyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.183 17.465 7.53 17.845 9 17.96V14a2 2 0 0 1 2-2h5.732A2 2 0 0 0 15 11H5.009ZM19 14.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5Zm-1 3v-1a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5Zm0-3a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Zm-.5 3.5a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}
export default PersonMoneyFilled;
