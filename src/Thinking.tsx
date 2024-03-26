import React, { SVGProps } from "react";

export function Thinking(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2c-.962 0-1.72.242-2.305.642a3.54 3.54 0 0 0-1.21 1.46c-.33.706-.436 1.437-.47 1.915c-.646.048-1.31.203-1.855.567C3.442 7.063 3 7.854 3 9s.442 1.937 1.16 2.416c.683.455 1.55.584 2.34.584h7c.781 0 1.65-.112 2.336-.56C16.562 10.966 17 10.17 17 9c0-1.146-.442-1.937-1.16-2.416c-.546-.364-1.208-.519-1.856-.567c-.033-.478-.139-1.209-.468-1.916a3.555 3.555 0 0 0-1.21-1.46C11.72 2.243 10.961 2 10 2ZM7 6.5c0-.243.003-1.146.39-1.976c.19-.407.467-.782.868-1.056C8.658 3.195 9.212 3 10 3s1.343.195 1.742.468c.401.274.677.649.867 1.056c.388.83.391 1.733.391 1.976a.5.5 0 0 0 .5.5c.71 0 1.343.121 1.785.416c.406.271.715.73.715 1.584c0 .888-.312 1.342-.711 1.603c-.44.288-1.07.397-1.789.397h-7c-.71 0-1.343-.121-1.785-.416C4.308 10.313 4 9.854 4 9c0-.854.308-1.313.715-1.584C5.157 7.121 5.79 7 6.5 7a.5.5 0 0 0 .5-.5ZM8 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-4.5 2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default Thinking;