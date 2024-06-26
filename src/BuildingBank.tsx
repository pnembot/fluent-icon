import type { SVGProps } from "react";

export function BuildingBank(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.874a.833.833 0 1 0 0-1.667a.833.833 0 0 0 0 1.667Zm6 7.466V8h.092c.893 0 1.26-1.148.53-1.665l-5.85-4.152a1.333 1.333 0 0 0-1.544 0L3.376 6.335c-.728.517-.363 1.664.53 1.664H4v5.34c-.601.386-1 1.06-1 1.827v1.333a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.333c0-.767-.398-1.441-1-1.826ZM9.806 2.999a.333.333 0 0 1 .385 0l5.639 4H4.168l5.639-4Zm5.192 5v5.006a2.19 2.19 0 0 0-.166-.006h-1.834V8h2ZM5 13.005V8h2v5H5.166c-.056 0-.112.002-.167.006Zm.167.994h9.667c.644 0 1.166.522 1.166 1.167v.833H4v-.833c0-.645.523-1.167 1.167-1.167Zm4.333-1H8V8h1.5v5Zm1 0V8H12v5h-1.5Z"
      />
    </svg>
  );
}
export default BuildingBank;
