import type { SVGProps } from "react";

export function BuildingTownhouseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.957 3.292a1 1 0 0 0-1.414 0l-2.103 2.1A1.5 1.5 0 0 0 3 6.455V15.5A1.5 1.5 0 0 0 4.5 17H7v-3.5a.5.5 0 0 1 .5-.5h2V6.454a1.5 1.5 0 0 0-.44-1.061l-2.103-2.1ZM10.5 6.454V13h2a.5.5 0 0 1 .5.5V17h2.5a1.5 1.5 0 0 0 1.5-1.5V6.454a1.5 1.5 0 0 0-.44-1.061l-2.103-2.1a1 1 0 0 0-1.414 0l-2.103 2.1a1.5 1.5 0 0 0-.44 1.061Zm0 7.546v3H12v-3h-1.5Zm-1 3v-3H8v3h1.5ZM7 7.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm8.25-3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}
export default BuildingTownhouseFilled;
