import type { SVGProps } from "react";

export function DoorArrowLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2.5A1.5 1.5 0 0 0 4.5 4v12A1.5 1.5 0 0 0 6 17.5h3.89a5.5 5.5 0 0 1 5.61-8.41V4A1.5 1.5 0 0 0 14 2.5H6ZM8 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm11 4.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-6.853-.354l-.003.003a.499.499 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L13.707 15H16.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default DoorArrowLeftFilled;
