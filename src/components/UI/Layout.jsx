export default function Layout({ children }) {
    return (
        <div className="w-screen h-screen flex justify-center items-center" id="layout">
            {children}
        </div>
    );
}