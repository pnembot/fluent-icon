import React, { SVGProps } from "react";

export function ThumbLike(props: SVGProps<SVGSVGElement>) {
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
        d="M10.052 2.294c.34-.977 1.632-1.427 2.43-.59c.164.17.326.354.436.519c.32.48.455 1.113.504 1.73c.05.627.016 1.301-.048 1.912a18.678 18.678 0 0 1-.241 1.583l-.01.052h.883a3 3 0 0 1 2.952 3.537l-.684 3.761a4.5 4.5 0 0 1-5.612 3.537l-5.6-1.527a2.5 2.5 0 0 1-1.793-1.922l-.353-1.765c-.278-1.389.784-2.559 1.913-3.005a2.84 2.84 0 0 0 .84-.49c1.707-1.514 2.325-2.723 3.385-4.85c.354-.71.718-1.676.998-2.482Zm1.965 5.585v-.002l.002-.007l.007-.031a13.699 13.699 0 0 0 .126-.584c.076-.388.167-.92.227-1.495c.061-.577.09-1.184.046-1.728c-.044-.556-.16-.985-.34-1.255a3.258 3.258 0 0 0-.326-.383c-.199-.208-.628-.16-.762.228c-.283.814-.664 1.83-1.048 2.6c-1.067 2.141-1.756 3.502-3.616 5.152c-.34.302-.744.517-1.136.672c-.88.348-1.447 1.148-1.3 1.879l.352 1.765a1.5 1.5 0 0 0 1.077 1.153l5.6 1.527a3.5 3.5 0 0 0 4.364-2.75l.684-3.762A2 2 0 0 0 14.006 8.5h-1.505a.5.5 0 0 1-.484-.621Z"
      />
    </svg>
  );
}
export default ThumbLike;