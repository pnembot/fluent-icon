import type { SVGProps } from "react";

export function RibbonStar(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.164 5.102a.175.175 0 0 0-.318 0L9.13 6.655a.175.175 0 0 1-.138.1l-1.699.202a.175.175 0 0 0-.098.302L8.451 8.42a.175.175 0 0 1 .053.163L8.17 10.26a.175.175 0 0 0 .257.187l1.493-.835a.175.175 0 0 1 .17 0l1.493.835c.13.073.286-.04.257-.187l-.333-1.677a.175.175 0 0 1 .053-.163l1.255-1.161a.175.175 0 0 0-.098-.302l-1.698-.202a.175.175 0 0 1-.139-.1l-.716-1.553ZM16 8a5.985 5.985 0 0 1-2 4.472V17.5a.5.5 0 0 1-.748.434L10 16.076l-3.252 1.858A.5.5 0 0 1 6 17.5v-5.028A6 6 0 1 1 16 8Zm-6 6a5.973 5.973 0 0 1-3-.803v3.442l2.752-1.573a.5.5 0 0 1 .496 0L13 16.64v-3.442A5.972 5.972 0 0 1 10 14Zm0-1a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"
      />
    </svg>
  );
}
export default RibbonStar;
