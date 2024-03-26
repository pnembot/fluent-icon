import React, { SVGProps } from "react";

export function HeartPulse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.496 16.803L15.255 12H14.25c-.123 0-.243-.015-.36-.044l-3.865 3.902l-3.863-3.902A1.501 1.501 0 0 1 5.8 12H4.799l4.755 4.803c.26.263.682.263.942 0Zm6.228-12.49a4.416 4.416 0 0 1 .978 4.7A1.514 1.514 0 0 0 17.5 9h-.889a3.415 3.415 0 0 0-.598-3.984A3.306 3.306 0 0 0 11.3 5l-.951.963a.5.5 0 0 1-.711 0l-.96-.97a3.302 3.302 0 0 0-4.706-.016C2.899 6.061 2.713 7.711 3.42 9H2.5c-.06 0-.12.004-.18.01a4.398 4.398 0 0 1 .941-4.736a4.301 4.301 0 0 1 6.127.016l.605.61l.596-.603a4.306 4.306 0 0 1 6.135.016ZM7.962 6.307a.5.5 0 0 0-.922-.004L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.304l1.235-2.907l2.043 4.903a.5.5 0 0 0 .886.073l2.143-3.429l1.307 1.493a.5.5 0 0 0 .376.171h3.25a.5.5 0 0 0 0-1h-3.023l-1.6-1.83a.5.5 0 0 0-.801.065l-1.987 3.179l-2.127-5.106Z"
      />
    </svg>
  );
}
export default HeartPulse;
