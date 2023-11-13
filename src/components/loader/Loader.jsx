import { RevolvingDot } from 'react-loader-spinner';

export default function Loader() {
  return (
    <RevolvingDot
      radius="45"
      strokeWidth="5"
      color="orange"
      secondaryColor="rgb(35, 8, 66)"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
