import '../styles/Banner.css';

function Banner ({children}) {
      return (
            <div className="th-banner">
                {children}
            </div>
      );
}

export default Banner;