import type { SVGProps } from "react";

export function SelectObjectSkewEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.487 6h.013a1.5 1.5 0 1 0-1.415-2l-.006.019a1.498 1.498 0 0 0 .468 1.64l.006.004c.255.208.58.334.934.337ZM2 15.5a1.5 1.5 0 1 0 2.921-.481L4.915 15a1.503 1.503 0 0 0-1.402-1H3.5A1.5 1.5 0 0 0 2 15.5ZM7.487 6H7.5a1.5 1.5 0 0 0 1.415-1l.006-.019A1.498 1.498 0 0 0 8.915 4a1.5 1.5 0 1 0-2.368 1.658l.006.005c.255.208.58.334.934.337Zm-1.294.631l-2.326 6.396c.34.05.659.169.94.341l2.326-6.395a2.484 2.484 0 0 1-.94-.342ZM14.05 5h-4.1a2.512 2.512 0 0 0 0-1h4.1a2.511 2.511 0 0 0 0 1Zm-.639 6.532l1.672-1.672l1.05-2.887a2.483 2.483 0 0 1-.94-.342l-1.782 4.9ZM5.95 16h3.525c.11-.361.283-.7.51-1H5.95a2.512 2.512 0 0 1 0 1Zm5.03-.623l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default SelectObjectSkewEdit;
