import type { SVGProps } from "react";

export function ImageCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 10a7.97 7.97 0 0 1-1.998 5.29l-4.95-4.871a1.5 1.5 0 0 0-2.104 0l-4.95 4.871A8 8 0 1 1 18 10Zm-7.649 1.131l4.944 4.866A7.97 7.97 0 0 1 10 18a7.97 7.97 0 0 1-5.295-2.003l4.945-4.866a.5.5 0 0 1 .701 0ZM12.75 8.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default ImageCircleFilled;
