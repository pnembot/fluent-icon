import type { SVGProps } from "react";

export function CubeQuick(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.272 5.557a.5.5 0 0 1 .456 0l3 1.541a.5.5 0 0 1 .272.445v3.915a.5.5 0 0 1-.272.444l-3 1.541a.5.5 0 0 1-.456 0l-3-1.54a.5.5 0 0 1-.272-.445V7.543a.5.5 0 0 1 .272-.445l3-1.54Zm.913-.89a1.5 1.5 0 0 0-1.37 0l-3 1.541A1.5 1.5 0 0 0 9 7.543v3.915a1.5 1.5 0 0 0 .815 1.334l3 1.54c.43.222.94.222 1.37 0l3-1.54A1.5 1.5 0 0 0 18 11.458V7.543a1.5 1.5 0 0 0-.815-1.335l-3-1.54ZM3 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-1 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm1 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm8.053-4.723a.5.5 0 0 1 .67-.224l1.777.888l1.776-.888a.5.5 0 1 1 .448.895L14 9.309V11.5a.5.5 0 1 1-1 0V9.31l-1.724-.862a.5.5 0 0 1-.223-.671Z"
      />
    </svg>
  );
}
export default CubeQuick;
