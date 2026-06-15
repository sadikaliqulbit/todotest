export const Input = ({ className, ...props }) => (
    <input {...props}
        className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className || ""}`} />
)

export const Button = ({ className, ...props }) => (
    <button {...props}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md ${className || ""}`} />
)

export const Select = ({ className, ...props }) => (
    <select {...props}
        className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className || ""}`} />
)
