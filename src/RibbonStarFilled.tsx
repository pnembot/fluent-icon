import type { SVGProps } from "react";

export function RibbonStarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0ZM9.847 5.102L9.13 6.655a.175.175 0 0 1-.138.1l-1.698.202a.175.175 0 0 0-.099.302L8.451 8.42a.175.175 0 0 1 .053.163L8.17 10.26c-.03.147.126.26.257.187l1.492-.835a.175.175 0 0 1 .171 0l1.492.835c.13.073.287-.04.258-.187l-.334-1.677a.175.175 0 0 1 .053-.163l1.256-1.161a.175.175 0 0 0-.099-.302l-1.698-.202a.175.175 0 0 1-.138-.1l-.717-1.553a.175.175 0 0 0-.317 0ZM10 15a6.968 6.968 0 0 0 4-1.255V17.5a.5.5 0 0 1-.79.407L10 16l-3.21 1.907A.5.5 0 0 1 6 17.5v-3.755A6.968 6.968 0 0 0 10 15Z"
      />
    </svg>
  );
}
export default RibbonStarFilled;
