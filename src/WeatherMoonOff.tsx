import type { SVGProps } from "react";

export function WeatherMoonOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L8.753 9.46a9.092 9.092 0 0 1-.035.069c-.935 1.783-2.545 3.03-5.551 4.106a.598.598 0 0 0-.292.903a7.985 7.985 0 0 0 12.142 1.187l2.13 2.129a.5.5 0 0 0 .707-.708l-2.165-2.164l-.712-.712l-5.022-5.022l-.772-.772l-6.33-6.33ZM14.31 15.018a6.984 6.984 0 0 1-10.3-.63c2.732-1.048 4.436-2.326 5.482-4.19l4.818 4.82ZM12.938 3.96a6.981 6.981 0 0 1 2.6 9.457l.732.731l.09-.151A7.981 7.981 0 0 0 9.88 2.035a.599.599 0 0 0-.613.74c.437 1.79.494 3.272.226 4.597l.828.828c.425-1.511.451-3.166.042-5.117c.898.119 1.77.413 2.575.877Z"
      />
    </svg>
  );
}
export default WeatherMoonOff;
