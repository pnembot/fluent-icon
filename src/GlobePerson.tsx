import React, { SVGProps } from "react";

export function GlobePerson(props: SVGProps<SVGSVGElement>) {
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
        d="M11.313 17.893a8 8 0 1 1 6.68-7.562a3.016 3.016 0 0 0-1.02-.945A6.963 6.963 0 0 0 16.54 7.5h-2.733c.097.608.16 1.247.183 1.907c-.4.233-.74.556-.994.94a14.86 14.86 0 0 0-.202-2.847H7.206A14.87 14.87 0 0 0 7 10c0 .883.073 1.725.206 2.5h5.335c.06.359.185.696.36 1H7.42c.153.59.342 1.126.56 1.592C8.592 16.41 9.342 17 10 17c.32 0 .663-.14 1-.437c.01.453.11.907.313 1.33Zm.709-12.985C11.407 3.59 10.657 3 10 3c-.657 0-1.407.59-2.022 1.908A9.251 9.251 0 0 0 7.42 6.5h5.162a9.246 9.246 0 0 0-.56-1.592ZM6.389 6.5c.176-.743.407-1.422.683-2.015c.186-.399.401-.773.642-1.103A7.022 7.022 0 0 0 3.936 6.5H6.39ZM6 10c0-.87.067-1.712.193-2.5H3.46A6.984 6.984 0 0 0 3 10c0 .88.163 1.724.46 2.5h2.733A15.969 15.969 0 0 1 6 10Zm1.072 5.515a10.501 10.501 0 0 1-.683-2.015H3.936a7.022 7.022 0 0 0 3.778 3.118a6.63 6.63 0 0 1-.642-1.103ZM16.064 6.5a7.021 7.021 0 0 0-3.778-3.118c.241.33.456.704.642 1.103c.276.593.507 1.272.683 2.015h2.453ZM17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default GlobePerson;
