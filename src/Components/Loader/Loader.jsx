import { ThreeDots } from "react-loader-spinner"

export default function Loader () {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '85vh',
            width: '100%',
        }}>
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
    )
}