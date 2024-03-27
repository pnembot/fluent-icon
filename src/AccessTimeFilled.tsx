import type { SVGProps } from "react";

export function AccessTimeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM6.988 8.608a.5.5 0 0 1-.977-.211v-.005a1.998 1.998 0 0 1 .32-.687A1.7 1.7 0 0 1 7.756 7c.552 0 1.001.215 1.308.561c.298.337.438.772.438 1.189c0 .349-.069.648-.205.906a1.79 1.79 0 0 1-.507.585a4.713 4.713 0 0 1-.48.313l-.056.034c-.168.1-.306.187-.425.29c-.394.341-.652.702-.764 1.122H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.475-1.774 1.173-2.378c.19-.166.396-.29.567-.393l.058-.035a3.66 3.66 0 0 0 .379-.244a.804.804 0 0 0 .233-.26a.917.917 0 0 0 .09-.44a.798.798 0 0 0-.187-.526C8.203 8.1 8.03 8 7.753 8c-.33 0-.505.146-.614.295a.999.999 0 0 0-.147.3l-.004.013ZM11 7a.5.5 0 0 1 .5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 11 7Z"
      />
    </svg>
  );
}
export default AccessTimeFilled;
