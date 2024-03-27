import type { SVGProps } from "react";

export function CameraEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.783 2.826A1.5 1.5 0 0 1 8.123 2h3.764a1.5 1.5 0 0 1 1.342.83L13.814 4h1.69a2.5 2.5 0 0 1 2.5 2.5v2.195a2.853 2.853 0 0 0-1-.56V6.5a1.5 1.5 0 0 0-1.5-1.5h-2a.5.5 0 0 1-.446-.276l-.723-1.447A.5.5 0 0 0 11.887 3H8.123a.5.5 0 0 0-.447.275l-.728 1.449a.5.5 0 0 1-.446.275H4.504a1.5 1.5 0 0 0-1.5 1.5V14.5a1.5 1.5 0 0 0 1.5 1.5H8.22l-.163.653a1.936 1.936 0 0 0-.054.347h-3.5a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h1.69l.59-1.174Zm7.104 6.23A4.002 4.002 0 0 0 6 10c0 1.89 1.31 3.473 3.072 3.892a3.2 3.2 0 0 1 .202-.222l.67-.67A3 3 0 1 1 13 9.944l.888-.888Zm.922.492l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default CameraEdit;
