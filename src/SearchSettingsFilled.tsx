import type { SVGProps } from "react";

export function SearchSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 3a5.5 5.5 0 0 1 4.383 8.823l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073l-4.147-4.147a5.505 5.505 0 0 1-.923.567a5.457 5.457 0 0 0-.492-1.434a4 4 0 1 0-5.866-2.933A5.46 5.46 0 0 0 3.1 9.55A5.5 5.5 0 0 1 8.5 3Zm-5.435 8.442a2 2 0 0 1-1.43 2.478l-.461.118a4.709 4.709 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.422c.257.204.537.378.834.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.461-.117a4.71 4.71 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.319 4.319 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.315 4.315 0 0 0-.822.497l.156.557ZM5.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default SearchSettingsFilled;
