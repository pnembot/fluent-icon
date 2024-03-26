import React, { SVGProps } from "react";

export function Currency(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M5.5 2a.5.5 0 0 1 .5.5v.535A3.5 3.5 0 0 1 9 6.5v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-2-2.45v5.626l.86.386A3.62 3.62 0 0 1 9 13.366v.12a3.5 3.5 0 0 1-3 3.464v.546a.5.5 0 0 1-1 0v-.546a3.5 3.5 0 0 1-3-3.464V12.5a.5.5 0 1 1 1 0v.985a2.5 2.5 0 0 0 2 2.45v-5.613l-.855-.383A3.629 3.629 0 0 1 2 6.629V6.5a3.5 3.5 0 0 1 3-3.465V2.5a.5.5 0 0 1 .5-.5zm10.598 1c.554 0 1.175.153 1.671.475a.5.5 0 0 1-.544.838A2.154 2.154 0 0 0 16.098 4c-1.064 0-2.077.609-2.843 1.693a6.64 6.64 0 0 0-.932 1.98L12.235 8H13.5a.5.5 0 0 1 .09.992L13.5 9h-1.443a8.615 8.615 0 0 0-.05.661L12 10h1.496a.5.5 0 0 1 .09.992l-.09.008h-1.439c.15 1.296.586 2.442 1.198 3.307C14.02 15.391 15.034 16 16.098 16c.405 0 .823-.1 1.12-.303a.5.5 0 0 1 .565.825c-.51.349-1.145.478-1.685.478c-1.476 0-2.762-.846-3.66-2.115c-.68-.962-1.155-2.186-1.345-3.543L11.05 11h-.555a.5.5 0 0 1-.09-.992l.09-.008H11c0-.226.008-.45.023-.67L11.05 9H10.5a.5.5 0 0 1-.09-.992L10.5 8h.71c.235-1.094.66-2.081 1.228-2.885C13.336 3.846 14.622 3 16.098 3zM6 10.772v5.164a2.501 2.501 0 0 0 1.995-2.279L8 13.486v-.12a2.62 2.62 0 0 0-1.386-2.312l-.162-.08L6 10.772zM5 4.05a2.501 2.501 0 0 0-1.994 2.279L3 6.5v.129c0 .975.54 1.864 1.39 2.318l.164.08l.446.2V4.05z"
        fill="currentColor"
        fill-rule="nonzero"
      />
    </svg>
  );
}
export default Currency;