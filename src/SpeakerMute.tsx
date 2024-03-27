import type { SVGProps } from "react";

export function SpeakerMute(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.996 3.006c0-.873-1.04-1.327-1.68-.733L6.444 5.866a.5.5 0 0 1-.34.134H3.496a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h2.608a.5.5 0 0 1 .34.133l3.872 3.594c.64.593 1.68.14 1.68-.733V3.006ZM7.124 6.599l3.872-3.593v13.988L7.124 13.4a1.5 1.5 0 0 0-1.02-.4H3.496a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.608a1.5 1.5 0 0 0 1.02-.4Zm6.019 1.047a.5.5 0 0 1 .707 0l1.646 1.647l1.646-1.647a.5.5 0 1 1 .708.707L16.203 10l1.647 1.646a.5.5 0 1 1-.708.707l-1.646-1.646l-1.646 1.646a.5.5 0 1 1-.707-.707L14.788 10l-1.646-1.647a.5.5 0 0 1 0-.707Z"
      />
    </svg>
  );
}
export default SpeakerMute;
