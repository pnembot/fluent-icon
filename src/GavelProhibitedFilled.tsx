import type { SVGProps } from "react";

export function GavelProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.666 7.59a1.5 1.5 0 0 1-.226-2.307l2.841-2.841a1.5 1.5 0 0 1 2.278.184l.473.656l-4.733 4.732l-.633-.424Zm1.48.992l4.478-4.477l1.322 1.836a.5.5 0 0 0 .113.113l1.837 1.323l-1.628 1.628a5.482 5.482 0 0 0-3.673 1.621l-.434-.649a.501.501 0 0 0-.137-.137L8.146 8.582Zm7.435.524a5.476 5.476 0 0 1 2.323 1.074a1.5 1.5 0 0 0-.53-1.738l-.656-.473l-1.137 1.137Zm-6.277 3.588c.156-.45.368-.872.629-1.26l-.548-.818l-1.196-.801l-5.775 5.775a1.412 1.412 0 1 0 1.997 1.996l4.893-4.892ZM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.484 3.484 0 0 1 11 14.5Zm3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18Z"
      />
    </svg>
  );
}
export default GavelProhibitedFilled;
