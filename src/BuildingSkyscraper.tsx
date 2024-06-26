import type { SVGProps } from "react";

export function BuildingSkyscraper(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM7.5 11.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm5.25 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM7 1.997a.5.5 0 0 0-.5.5V4h-.945a.5.5 0 0 0-.5.5v1.738A2 2 0 0 0 4 8.001v8.498a.5.5 0 0 0 .5.5h6.958A.477.477 0 0 0 11.5 17h5a.5.5 0 0 0 .5-.5v-4A4.5 4.5 0 0 0 12.5 8H12a2 2 0 0 0-.945-1.7V4.5a.5.5 0 0 0-.5-.5H9.5V2.496a.5.5 0 0 0-.5-.5H7Zm3 4.005H6.055V4.999h4V6H10ZM11 16h-1v-1.994a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1V16H5V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7.998Zm-4 0v-1.994h2V16H7Zm9 0h-4V9h.5a3.5 3.5 0 0 1 3.5 3.5V16ZM8.5 4h-1V2.996h1V4Z"
      />
    </svg>
  );
}
export default BuildingSkyscraper;
