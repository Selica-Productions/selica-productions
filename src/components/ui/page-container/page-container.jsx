import "./page-container.css"

function PageContainer({ children }) {
  return (
    <div className="content pt-3 d-flex flex-column gap-3 justify-content-center align-items-center">
        {children}
    </div>
  )
}

export default PageContainer