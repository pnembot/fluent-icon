import type { SVGProps } from "react";

export function RotateLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.387 12a.526.526 0 0 1-.532-.52c0-.286.238-.519.532-.519h.355c1.764 0 3.193-1.084 3.193-2.423c0-1.297-1.344-2.357-3.034-2.42l-.16-.003H7.818l1.22 1.19a.51.51 0 0 1 0 .735a.542.542 0 0 1-.692.05l-.06-.05l-2.13-2.077a.51.51 0 0 1 0-.734l2.13-2.077l.06-.05a.542.542 0 0 1 .693.05a.51.51 0 0 1 0 .734l-1.22 1.19h4.924c2.352 0 4.258 1.55 4.258 3.462C17 10.45 15.094 12 12.742 12h-.355ZM4 10.413V16h10.18L4 10.413ZM3.794 17C3.355 17 3 16.663 3 16.248V9.376C3 9.168 3.178 9 3.397 9c.07 0 .138.017.199.05l13.206 7.248c.19.104.254.335.145.514a.401.401 0 0 1-.344.188H3.793Z"
      />
    </svg>
  );
}
export default RotateLeft;
