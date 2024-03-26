import React, { SVGProps } from "react";

export function BatterySaver(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 9.564c0-1.237-.618-3.037-1.834-5.276c-.208-.384-.753-.38-.987-.015c-.326.507-.811 1.026-1.459 1.555l-.287.227l-.657.507c-1.344 1.082-1.874 2.043-1.757 3.464c.102 1.256.855 2.155 2.147 2.567c-.456.537-1.056.96-1.806 1.274a.591.591 0 0 0-.316.77c.124.3.465.442.762.318c1.425-.595 2.448-1.551 3.041-2.853c.222-.486.4-.966.532-1.439l.033-.122l.08-.324l.053-.26l.032-.185l.052-.374c.033-.297.047-.59.043-.88L6.669 8.5a.586.586 0 0 1 .573-.562a.586.586 0 0 1 .592.58c.018 1.146-.212 2.315-.688 3.504l-.02.07a.36.36 0 0 0 .026.21c.08.18.29.26.467.178l.09-.045a.932.932 0 0 0 .151-.107C8.422 11.838 9 10.801 9 9.564Zm6.994-2.21A2.5 2.5 0 0 0 13.498 5H9.534c-.313 0-.536.14-.536.498s.2.496.536.496h4.22l.12.006a1.25 1.25 0 0 1 1.13 1.244v5.506l-.006.12A1.25 1.25 0 0 1 13.754 14H5.998c-.301 0-.502.193-.502.495c0 .303.2.5.502.505h7.5l.147-.004a2.5 2.5 0 0 0 2.353-2.496v-.819h1.167l.112-.007a.833.833 0 0 0 .721-.826V9.182l-.006-.102a.834.834 0 0 0-.827-.732l-1.167-.015V7.5l-.004-.147Z"
      />
    </svg>
  );
}
export default BatterySaver;