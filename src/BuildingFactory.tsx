import type { SVGProps } from "react";

export function BuildingFactory(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.435 2a1.5 1.5 0 0 0-1.497 1.4l-.866 13A1.5 1.5 0 0 0 3.568 18h2.863a1.5 1.5 0 0 0 1.496-1.6l-.866-13A1.5 1.5 0 0 0 5.564 2H4.435Zm-.499 1.467a.5.5 0 0 1 .5-.467h1.128a.5.5 0 0 1 .499.467l.867 13a.5.5 0 0 1-.5.533H3.569a.5.5 0 0 1-.498-.533l.866-13ZM16.5 18H8.43a2.49 2.49 0 0 0 .45-1H10v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h.5a.5.5 0 0 0 .5-.5V6.623l-4.166 3.749a.5.5 0 0 1-.835-.372V6.623l-3.51 3.16l-.085-1.27l3.761-3.385A.5.5 0 0 1 13 5.5v3.377l4.165-3.749A.5.5 0 0 1 18 5.5v11a1.5 1.5 0 0 1-1.5 1.5ZM11 17h4v-4h-4v4Z"
      />
    </svg>
  );
}
export default BuildingFactory;
