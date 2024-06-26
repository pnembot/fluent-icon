import type { SVGProps } from "react";

export function SearchSettings(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057l-4.126-4.127a5.528 5.528 0 0 1-1.12.723a5.448 5.448 0 0 0-.286-.977a4.5 4.5 0 1 0-6.562-3.281c-.33.09-.649.21-.952.358A5.5 5.5 0 0 1 8.5 3Zm-5.435 8.442a2 2 0 0 1-1.43 2.478l-.461.118a4.709 4.709 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.422c.257.204.537.378.834.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.461-.117a4.71 4.71 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.319 4.319 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.315 4.315 0 0 0-.822.497l.156.557ZM5.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default SearchSettings;
