import type { SVGProps } from "react";

export function TaskListSquareSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.601A5.5 5.5 0 0 1 17 9.601V6a3 3 0 0 0-3-3H6Zm3.354 3.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362l1.412-1.412a.5.5 0 0 1 .708 0Zm-.708 5a.5.5 0 0 1 .708.708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413ZM11 8a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1H11Zm-.366 5.92a2 2 0 0 0 1.43-2.478l-.156-.557c.255-.197.53-.364.822-.5l.337.358a2 2 0 0 0 2.91 0l.322-.343c.298.14.578.313.835.518l-.126.422a2.001 2.001 0 0 0 1.456 2.519l.35.082a4.595 4.595 0 0 1 .01 1.017l-.46.118a1.998 1.998 0 0 0-1.432 2.478l.156.556c-.254.197-.53.365-.822.5l-.337-.358a1.999 1.999 0 0 0-2.909 0l-.32.348a4.355 4.355 0 0 1-.836-.518l.126-.423a2 2 0 0 0-1.456-2.52l-.349-.082a4.622 4.622 0 0 1-.01-1.016l.46-.121Zm4.865.58a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default TaskListSquareSettingsFilled;
