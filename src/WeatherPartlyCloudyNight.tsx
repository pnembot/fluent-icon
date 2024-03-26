import React, { SVGProps } from "react";

export function WeatherPartlyCloudyNight(props: SVGProps<SVGSVGElement>) {
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
        d="M11 7c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 14.763 16.714 16 15.128 16H6.872C5.286 16 4 14.763 4 13.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C7.139 8.561 8.535 7 11 7Zm0 1c-1.65 0-3.087 1.27-3.087 3.025c0 .278-.254.496-.545.496h-.55C5.814 11.521 5 12.3 5 13.261C5 14.22 5.814 15 6.818 15h8.364C16.186 15 17 14.221 17 13.26c0-.96-.814-1.739-1.818-1.739h-.55c-.29 0-.545-.218-.545-.496C14.087 9.248 12.65 8 11 8ZM5.843 3a4.236 4.236 0 0 1 1.895.565a4.238 4.238 0 0 1 1.979 2.573a4.931 4.931 0 0 0-1.073.363A3.048 3.048 0 0 0 7 4.375a6.016 6.016 0 0 0-.535-.249c.086 1.228-.036 2.483-.626 3.445c-.58.853-1.328 1.423-2.558 1.898c.14.124.29.236.45.339c.31.198.618.351.92.46a3.7 3.7 0 0 0-.878.811a4.24 4.24 0 0 1-1.662-1.418a.629.629 0 0 1 .306-.948c1.376-.492 2.117-1.046 2.54-1.856c.463-.883.549-1.82.242-3.08a.628.628 0 0 1 .644-.776Z"
      />
    </svg>
  );
}
export default WeatherPartlyCloudyNight;
