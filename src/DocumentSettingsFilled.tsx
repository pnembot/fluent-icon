import type { SVGProps } from "react";

export function DocumentSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8.663A5.5 5.5 0 0 0 4 8.207V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25Zm-7.935 8.192a2 2 0 0 1-1.43 2.478l-.462.118a4.709 4.709 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.258.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.71 4.71 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.422a4.32 4.32 0 0 0-.835-.518l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.314 4.314 0 0 0-.821.497l.156.557ZM5.499 14.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default DocumentSettingsFilled;
