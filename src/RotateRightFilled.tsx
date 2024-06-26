import type { SVGProps } from "react";

export function RotateRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.613 12a.526.526 0 0 0 .532-.52a.526.526 0 0 0-.532-.519h-.355c-1.764 0-3.193-1.084-3.193-2.423c0-1.297 1.344-2.357 3.034-2.42l.16-.003h4.923l-1.22 1.19a.51.51 0 0 0 0 .735a.542.542 0 0 0 .693.05l.06-.05l2.13-2.077a.51.51 0 0 0 0-.734l-2.13-2.077l-.06-.05a.542.542 0 0 0-.693.05a.51.51 0 0 0 0 .734l1.22 1.19H7.258C4.906 5.077 3 6.627 3 8.539C3 10.45 4.906 12 7.258 12h.355Zm8.99-3c.22 0 .397.168.397.376v6.872c0 .415-.355.752-.794.752H3.396a.401.401 0 0 1-.343-.188a.366.366 0 0 1 .145-.514l13.206-7.247a.414.414 0 0 1 .2-.051Z"
      />
    </svg>
  );
}
export default RotateRightFilled;
