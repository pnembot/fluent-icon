import type { SVGProps } from "react";

export function SpeakerOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.853 2.146a.5.5 0 1 0-.708.708L5.292 6H3.496a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h2.608a.5.5 0 0 1 .34.133l3.872 3.594c.64.594 1.68.14 1.68-.733v-4.29l5.15 5.15a.5.5 0 0 0 .707-.708l-2.563-2.562L2.853 2.146Zm8.143 9.558v5.29L7.124 13.4a1.5 1.5 0 0 0-1.02-.4H3.496a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.608c.06 0 .119-.004.177-.01l4.715 4.714Zm0-8.698v5.87l1 1v-6.87c0-.873-1.04-1.327-1.68-.733l-3.072 2.85l.708.708l3.044-2.825Zm3.064 8.934l.742.741a5.497 5.497 0 0 0-.04-5.431a.5.5 0 1 0-.866.5c.77 1.333.78 2.896.164 4.19Zm1.835 1.835l.722.722a8.003 8.003 0 0 0-.655-9.83a.5.5 0 1 0-.745.667a7.004 7.004 0 0 1 .678 8.441Z"
      />
    </svg>
  );
}
export default SpeakerOff;
