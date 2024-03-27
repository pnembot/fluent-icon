import type { SVGProps } from "react";

export function PiFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.401 4.783c-.166.321-.179.759-.117 1.07a.75.75 0 1 1-1.47.294c-.105-.522-.118-1.334.256-2.055C2.48 3.3 3.292 2.75 4.542 2.75H16.5a.75.75 0 0 1 0 1.5h-2.25v9.415c0 1.5.453 1.892.693 2.004c.322.151.809.079 1.217-.129a.75.75 0 0 1 .68 1.337c-.592.301-1.605.585-2.533.15c-1.01-.472-1.557-1.607-1.557-3.362V4.25H8.237a90.748 90.748 0 0 1-.606 6.325a44.662 44.662 0 0 1-.603 3.542c-.234 1.064-.514 2.032-.857 2.718a.75.75 0 1 1-1.342-.67c.257-.514.506-1.333.734-2.37a43.19 43.19 0 0 0 .581-3.42c.306-2.274.5-4.617.59-6.125H4.542c-.744 0-1.012.284-1.14.533Z"
      />
    </svg>
  );
}
export default PiFilled;
