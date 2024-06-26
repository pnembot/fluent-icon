import type { SVGProps } from "react";

export function SpeakerBluetooth(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.316 2.273c.64-.594 1.68-.14 1.68.733v13.988c0 .873-1.04 1.326-1.68.733l-3.872-3.594a.5.5 0 0 0-.34-.133H3.496a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h2.608a.5.5 0 0 0 .34-.134l3.872-3.593Zm.68.733L7.124 6.599a1.5 1.5 0 0 1-1.02.4H3.496a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.608a1.5 1.5 0 0 1 1.02.401l3.872 3.594V3.006Zm4.858 2.14A.5.5 0 0 0 15 5.5v3.46l-1.188-.95a.5.5 0 1 0-.624.78L14.7 10l-1.512 1.21a.5.5 0 1 0 .624.78L15 11.04v3.46a.5.5 0 0 0 .854.354l2.5-2.5a.5.5 0 0 0-.042-.744L16.3 10l2.012-1.61a.5.5 0 0 0 .042-.744l-2.5-2.5Zm1.397 6.895L16 13.293V11.04l1.251 1.002ZM16 6.707l1.251 1.252l-1.251 1V6.708Z"
      />
    </svg>
  );
}
export default SpeakerBluetooth;
