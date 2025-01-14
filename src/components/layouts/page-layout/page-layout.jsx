import "/src/styles/animations.css";

function PageLayout({ children, className="" }) {
    return (
        <div className={`container p-4 ${className}`}> 
            {children} 
        </div>
    );
}

export default PageLayout;