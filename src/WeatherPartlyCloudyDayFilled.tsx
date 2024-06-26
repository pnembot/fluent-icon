import type { SVGProps } from "react";

export function WeatherPartlyCloudyDayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 7c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 14.763 16.714 16 15.128 16H6.872C5.286 16 4 14.763 4 13.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 8.56 8.535 7 11 7ZM3.803 9.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 5.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 5.5Zm-6.003.17L3 5.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 3.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 3.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
      />
    </svg>
  );
}
export default WeatherPartlyCloudyDayFilled;
