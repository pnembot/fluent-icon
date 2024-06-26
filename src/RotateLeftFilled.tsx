import type { SVGProps } from "react";

export function RotateLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.387 12a.526.526 0 0 1-.532-.52c0-.286.238-.519.532-.519h.355c1.764 0 3.193-1.084 3.193-2.423c0-1.297-1.344-2.357-3.034-2.42l-.16-.003H7.818l1.22 1.19a.51.51 0 0 1 0 .735a.542.542 0 0 1-.692.05l-.06-.05l-2.13-2.077a.51.51 0 0 1 0-.734l2.13-2.077l.06-.05a.542.542 0 0 1 .693.05a.51.51 0 0 1 0 .734l-1.22 1.19h4.924c2.352 0 4.258 1.55 4.258 3.462C17 10.45 15.094 12 12.742 12h-.355Zm-8.99-3A.387.387 0 0 0 3 9.376v6.872c0 .415.355.752.794.752h12.81a.401.401 0 0 0 .343-.188a.366.366 0 0 0-.145-.514L3.596 9.051a.414.414 0 0 0-.2-.051Z"
      />
    </svg>
  );
}
export default RotateLeftFilled;
