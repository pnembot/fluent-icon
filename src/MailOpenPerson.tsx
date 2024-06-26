import type { SVGProps } from "react";

export function MailOpenPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3.083L3.486 6.992L3.472 7L10 10.917L16.528 7L10 3.083ZM9.977 12a.5.5 0 0 1-.234-.071L3 7.883V13.5A1.5 1.5 0 0 0 4.5 15h7c-.219.29-.375.63-.45 1H4.5A2.5 2.5 0 0 1 2 13.5V7.85a2 2 0 0 1 .971-1.716l6.762-4.057a.5.5 0 0 1 .524-.006l6.928 4.157a.9.9 0 0 1 0 1.544l-2.092 1.256a2.998 2.998 0 0 0-2.024 1.214l-2.811 1.687a.498.498 0 0 1-.28.07Zm7.523 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default MailOpenPerson;
