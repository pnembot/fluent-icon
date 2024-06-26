import type { SVGProps } from "react";

export function LightbulbCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm8-4a2.75 2.75 0 0 0-1.685 4.923c.188.146.341.363.391.63L8.79 12h2.42l.084-.447c.05-.267.203-.484.391-.63A2.75 2.75 0 0 0 10 6Zm1.023 7H8.977l.111.592A.5.5 0 0 0 9.58 14h.84a.5.5 0 0 0 .492-.408l.11-.592ZM6.25 8.75a3.75 3.75 0 1 1 6.049 2.963a.086.086 0 0 0-.02.02l-.002.003v.002l-.383 2.038A1.5 1.5 0 0 1 10.42 15h-.84a1.5 1.5 0 0 1-1.474-1.224l-.383-2.038l-.002-.004a.086.086 0 0 0-.02-.021A3.744 3.744 0 0 1 6.25 8.75Z"
      />
    </svg>
  );
}
export default LightbulbCircle;
