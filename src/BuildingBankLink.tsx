import type { SVGProps } from "react";

export function BuildingBankLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.874a.833.833 0 1 0 0-1.667a.833.833 0 0 0 0 1.667ZM3.5 17h4.836a3.475 3.475 0 0 1-.302-1H4v-.833C4 14.522 4.523 14 5.167 14h3.17c.178-.375.42-.713.714-1H8V8h1.5v4.627c.301-.21.638-.375 1-.482V7.999H12v4h1V8h2v4h.499c.17 0 .337.012.5.036V7.999h.093c.893 0 1.26-1.147.53-1.664l-5.85-4.152a1.333 1.333 0 0 0-1.544 0L3.376 6.335c-.728.517-.363 1.664.53 1.664H4v5.34c-.601.386-1 1.06-1 1.827v1.333a.5.5 0 0 0 .5.5ZM9.806 3a.333.333 0 0 1 .385 0l5.639 4H4.168l5.639-4ZM4.999 13.005V8h2v5H5.166c-.056 0-.112.002-.167.006ZM11.5 13a2.5 2.5 0 0 0 0 5h.5a.5.5 0 1 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 1 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 1 1 0 3H15a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default BuildingBankLink;
