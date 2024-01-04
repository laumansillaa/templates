import { ThreeDots } from "react-loader-spinner";

export default function Loader({ customHeight }) {
  let customStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: customHeight ? customHeight : "85vh",
  };
  return (
    <div
      style={customStyle}
    >
      <ThreeDots
        height="120"
        width="120"
        radius="9"
        color="#FCA640"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
