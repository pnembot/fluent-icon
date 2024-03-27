import type { SVGProps } from "react";

export function DocumentOnePageSparkleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m14.878.282l.348 1.071a2.205 2.205 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.208 2.208 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.23 2.23 0 0 0-.532-.867a2.224 2.224 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0Zm4.905 7.931l-.766-.248a1.577 1.577 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.576 1.576 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57l-.015-.004ZM6 2h5.43l-.48.154A1.411 1.411 0 0 0 10 3.496c0 .3.09.581.26.821s.41.431.71.531l1.062.35c.15.051.29.131.47.291c.11.11.2.24.29.471l.062.187A.499.499 0 0 0 12.5 6h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .495-.427l.158.479c.09.25.25.48.52.691c.14.1.29.17.45.21c-.08.17-.12.361-.12.551c0 .27.08.531.24.752c.161.22.381.38.651.48l.761.25c.08.03.16.08.22.14c.06.051.097.116.125.182V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm1 11.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Zm5.5-4h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1Z"
      />
    </svg>
  );
}
export default DocumentOnePageSparkleFilled;
