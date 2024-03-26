import React, { SVGProps } from "react";

export function FlashOff(props: SVGProps<SVGSVGElement>) {
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
        d="M5.273 5.98L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-5.288-5.29l-5.004 5.109c-.754.782-2.059.06-1.795-.996l1.17-4.679H4.96a1.062 1.062 0 0 1-1.021-1.354L5.273 5.98Zm5.878 5.878l-5.07-5.07l-1.18 4.13c-.01.04.019.08.06.08H6.87a.5.5 0 0 1 .485.622l-1.325 5.3a.086.086 0 0 0-.003.029a.02.02 0 0 0 .003.011a.08.08 0 0 0 .072.04a.03.03 0 0 0 .01-.004a.087.087 0 0 0 .024-.018l.003-.004l5.013-5.116Zm3.663-3.74l-2.264 2.311l.707.707l2.274-2.32l.003-.005c.641-.667.18-1.811-.766-1.811h-2.564l1.261-3.594l.003-.008A1.062 1.062 0 0 0 12.46 2H7.211c-.474 0-.891.314-1.021.77L5.9 3.78l.809.809l.441-1.544A.062.062 0 0 1 7.211 3h5.25c.041 0 .07.04.059.08l-1.493 4.254a.5.5 0 0 0 .472.666h3.269c.018 0 .026.004.031.008a.079.079 0 0 1 .025.034a.084.084 0 0 1 .007.044a.056.056 0 0 1-.017.032Z"
      />
    </svg>
  );
}
export default FlashOff;
