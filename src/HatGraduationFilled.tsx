import type { SVGProps } from "react";

export function HatGraduationFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5Zm14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867Z"
      />
    </svg>
  );
}
export default HatGraduationFilled;
