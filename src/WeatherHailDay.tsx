import type { SVGProps } from "react";

export function WeatherHailDay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 16.666A.667.667 0 1 1 11 18a.667.667 0 0 1 0-1.334ZM8.667 16a.667.667 0 1 1 0 1.333a.667.667 0 0 1 0-1.333Zm4.666 0a.667.667 0 1 1 0 1.333a.667.667 0 0 1 0-1.333ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6Zm0 1c-1.65 0-3.087 1.27-3.087 3.025c0 .278-.254.496-.545.496h-.55C5.814 10.52 5 11.3 5 12.26c0 .96.814 1.74 1.818 1.74h8.364C16.186 14 17 13.22 17 12.26s-.814-1.74-1.818-1.74h-.55c-.291.001-.545-.217-.545-.495C14.087 8.248 12.649 7 11 7ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.333.162.625.373.874.62c-.406.083-.786.21-1.136.375A2.28 2.28 0 0 0 5.646 8.8c-.33.098-.64.241-.925.42A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
      />
    </svg>
  );
}
export default WeatherHailDay;
