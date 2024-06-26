import type { SVGProps } from "react";

export function PhoneSpanIn(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3.085a1.506 1.506 0 0 0-1 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.086a1.506 1.506 0 0 0-1 0V4Zm0 9.915V16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.085a1.506 1.506 0 0 1-1 0V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.086a1.505 1.505 0 0 1-1 0Zm2.853-3.061l-2 2a.5.5 0 0 1-.707-.708L6.293 11H3.5a.5.5 0 0 1 0-1h2.793L5.146 8.854a.5.5 0 1 1 .708-.708l2 2a.499.499 0 0 1 .146.351v.006a.498.498 0 0 1-.144.348l-.003.003Zm6.293-2.708l-2 2l-.002.003a.499.499 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L13.707 11H16.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708Z"
      />
    </svg>
  );
}
export default PhoneSpanIn;
